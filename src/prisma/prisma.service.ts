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
  async getClient(
    request?: Request,
    manster: boolean = false
  ): Promise<PrismaClient> {
    const tenant = this.extractTenantFromRequest(request);
    let databaseUrl = "";
    if (!tenant?.id || (!tenant?.key && manster !== false))
      databaseUrl = this.config.get("DATABASE_URL");
    else
      databaseUrl = `postgresql://${tenant?.id}:${tenant?.key}@localhost:5434/kulanda?schema=${tenant?.id}`;

    let client = this.clients[tenant?.id ?? "manster"];

    if (!client) {
      client = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });

      this.clients[tenant?.id ?? "manster"] = client;
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
