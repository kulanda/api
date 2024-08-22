import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import * as fs from "fs";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private clients: { [key: string]: PrismaClient } = {};
  private message = "";
  constructor(private config: ConfigService) {
    super({
      datasourceUrl: config.get("DATABASE_URL"),
    });
  }
  async getClient(request?: Request, intern?: boolean): Promise<PrismaClient> {
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
      tenant?.id && this.logMessage(tenant.id, JSON.stringify(params));
      return next(params);
    });

    return client;
  }

  logMessage(tenantId: string, message: string) {
    const logFilePath = `logs/${tenantId}.txt`;

    /* if (this.message === message) return;
    else
      fs.appendFile(
        logFilePath,
        `${new Date().toISOString()} - ${message}\n`,
        (err) => {
          if (err) {
            console.error("Erro ao escrever no arquivo de log:", err);
          } else {
            console.log("Log registrado com sucesso!");
            this.message = message;
          }
        }
      ); */
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
