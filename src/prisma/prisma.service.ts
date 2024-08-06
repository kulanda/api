import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private clients: { [key: string]: PrismaClient } = {};
  constructor(private config: ConfigService) {
    super({
      datasourceUrl: config.get("DATABASE_URL"),
    });
  }
  async getClient(request?: any, intern?: boolean): Promise<PrismaClient> {
    const tenant = this.extractTenantFromRequest(request);

    const cacheKey = `${tenant?.id}:${tenant?.key}`;

    let client = this.clients[cacheKey];

    const host = this.config
      .get("DATABASE_URL")
      .split("@")?.[1]
      ?.split("/")?.[0];

    const url =
      tenant?.id || tenant?.key
        ? `postgresql://${tenant?.id}:${tenant?.key}@${host}/kulanda?schema=${tenant?.id}`
        : this.config.get("DATABASE_URL");

    if (!client && url) {
      client = new PrismaClient({
        datasources: {
          db: {
            url,
          },
        },
      });

      this.clients[cacheKey] = client;
    }

    client.$use(async (params, next) => {
      if (
        params.model !== "AuditLog" &&
        [
          "create",
          "createMany",
          "createManyAndReturn",
          "update",
          "updateMany",
          "delete",
          "deleteMany",
        ].includes(params.action) &&
        request?.userId
      ) {
        // Primeiro, executa a ação
        const result = await next(params)

        // Depois de executar a ação, registra o log
        await client.auditLog.create({
          data: {
            user: {
              connect: {
                id: request?.userId,
              },
            },
            entity: params.model,
            args: JSON.stringify(params.args),
            action: params.action.toLowerCase(),
          },
        });

        return result;
      } else {
        return next(params);
      }
    });

    return client;
  }

  private extractTenantFromRequest(request: Request) {
    if (!request) return;
    // Substitua essa lógica com a lógica correta para extrair o tenantId do request
    return {
      id: request.headers["x-tenant-username"] as string,
      key: request.headers["x-tenant-key"] as string,
    };
  }

  async onModuleDestroy() {
    for (const client of Object.values(this.clients)) {
      await client.$disconnect();
    }
  }
}
