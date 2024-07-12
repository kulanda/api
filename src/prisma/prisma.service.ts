import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

@Injectable()
export class PrismaService implements OnModuleDestroy {
  private clients: { [key: string]: PrismaClient } = {};
  constructor(private configService: ConfigService) {}
  async getClient(
    request?: Request,
    intern: boolean = false
  ): Promise<PrismaClient> {
    const tenant = this.extractTenantFromRequest(request);
    let databaseUrl = "";
    if (!tenant?.id || (!tenant?.key && intern !== false))
      databaseUrl = this.configService.get("DATABASE_URL");
    else
      databaseUrl = `postgresql://${tenant?.id}:${tenant?.key}@localhost:5434/kulanda?schema=${tenant?.id}`;

    let client = this.clients[tenant?.id ?? "intern"];

    if (!client) {
      client = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });

      this.clients[tenant?.id ?? "intern"] = client;
    }

    return client;
  }

  private extractTenantFromRequest(request: Request) {
    if (!request) return;
    // Substitua essa lógica com a lógica correta para extrair o tenantId do request
    return {
      id: request.headers["x-tenant-id"] as string,
      key: request.headers["x-tenant-key"] as string,
    };
  }

  async onModuleDestroy() {
    for (const client of Object.values(this.clients)) {
      await client.$disconnect();
    }
  }
}
