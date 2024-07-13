import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private clients: { [key: string]: PrismaClient } = {};
  constructor(private config: ConfigService) {
    super({
      datasourceUrl: config.get("DATABASE_URL"),
    });
  }
  async getClient(request?: Request, intern?: boolean): Promise<PrismaClient> {
    const tenant = this.extractTenantFromRequest(request);

    const cacheKey = `${tenant?.id}:${tenant?.key}`;

    let client = this.clients[cacheKey];

    const url =
      tenant?.id || tenant?.key
        ? `postgresql://${tenant?.id}:${tenant?.key}@localhost:5434/kulanda?schema=${tenant?.id}`
        : intern
          ? this.config.get("DATABASE_URL")
          : null;

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
