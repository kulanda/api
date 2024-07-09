import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private clients: { [key: string]: PrismaClient } = {};

  constructor(
    private configService: ConfigService,
  ) {
    super();
  }

  async getClient(request: Request): Promise<PrismaClient> {
    const tenantId = this.extractTenantIdFromRequest(request);

    let client = this.clients[tenantId];
    if (!client) {
      const databaseUrl = this.configService
        .get("DATABASE_URL")
        .replace("public", tenantId);

      client = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });

      this.clients[tenantId] = client;
    }

    return client;
  }

  private extractTenantIdFromRequest(request: Request): string {
    // Substitua essa lógica com a lógica correta para extrair o tenantId do request
    return (request.headers["x-tenant-id"] as string) || "public";
  }

  async onModuleDestroy() {
    for (const client of Object.values(this.clients)) {
      await client.$disconnect();
    }
  }
}
