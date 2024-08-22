import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTenantArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
import { join } from "path";
import { createWriteStream, existsSync, mkdirSync } from "fs";
@Injectable()
export class TenantService {
  constructor(private prismaService: PrismaService) {}
  async createTenant({ company, ...dto }: CreateTenantArgs) {
    const client = await this.prismaService.getClient(null, true);

    try {
      const hash = `k_tnt_${this.generateApiKey(8)}`;

      let logo = "";
      if (company?.logo) {
        const dirPath = join("uploads/images/" + dto.username);

        logo = `${dirPath}/${company?.logo?.filename}`;

        if (!existsSync(dirPath)) {
          mkdirSync(dirPath, { recursive: true });
        }
        company?.logo?.createReadStream?.()?.pipe?.(createWriteStream(logo));
      }

      await this.buildSchema(client, {
        hash,
        ...dto,
        company,
      }).then(async () => {
        await client.tenant.create({
          data: {
            ...dto,
            Company: {
              create: {
                ...company,
                logo,
              },
            },
          },
        });
      });

      return {
        access_key: hash,
      };
    } catch (error) {
      throw error;
    }
  }
  private async buildSchema(
    client: PrismaClient,
    credentials: CreateTenantArgs & { hash: string }
  ) {
    const target_schema = credentials.username;
    const source_schema = "public";

    const role = credentials.username;
    const password = credentials.hash;
    try {
      const m = await client.$transaction([
        client.$executeRawUnsafe(
          `
          CREATE ROLE ${role} WITH LOGIN PASSWORD  '${password}';
          `
        ),
        client.$executeRawUnsafe(
          `
          CREATE SCHEMA IF NOT EXISTS ${target_schema};
          `
        ),
        client.$executeRawUnsafe(`
          GRANT USAGE ON SCHEMA public TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT USAGE ON SCHEMA ${target_schema} TO ${role};
        `),
        client.$executeRawUnsafe(`
          ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA ${target_schema} TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO ${role};
        `),
        client.$executeRawUnsafe(`
          ALTER DEFAULT PRIVILEGES IN SCHEMA ${target_schema} GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO ${role};
        `),
        client.$executeRawUnsafe(`
          ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE ON TABLES TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA ${target_schema} TO ${role};
        `),
        client.$queryRaw`SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname=${source_schema};`,
      ]);

      const tables = m[m.length - 1] as { tablename: string }[];

      for (const table of tables) {
        if (
          ![
            "_prisma_migrations",
            "companies",
            "CAEs",
            "tenants",
            "sectors",
          ].includes(table.tablename)
        ) {
          await client.$executeRawUnsafe(
            `CREATE TABLE ${target_schema}.${table.tablename} (LIKE ${source_schema}.${table.tablename} INCLUDING ALL);`
          );
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      await client.$disconnect();
    }
  }

  private generateApiKey(length = 32) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let apiKey = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      apiKey += characters[randomIndex];
    }
    return apiKey;
  }
}
