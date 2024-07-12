import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTenantArgs } from "./dto";
import * as argon from "argon2";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
@Injectable()
export class TenantService {
  constructor(private prismaService: PrismaService) {}
  async createTenant(credentials: CreateTenantArgs) {
    const { company, name } = credentials;

    const client = await this.prismaService.getClient(null, true);

    try {
      const res = await client.tenant.create({
        data: {
          name,
          Company: {
            create: {
              ...company,
            },
          },
        },
      });

      const hash = `k_tnt_${randomUUID()}`;

      await this.buildSchema(client, {
        hash,
        company,
        name,
      });

      return {
        ...res,
        key: hash,
      };
    } catch (error) {
      throw error;
    }
  }
  private async buildSchema(
    client: PrismaClient,
    credentials: CreateTenantArgs & { hash: string }
  ) {
    const target_schema = credentials.company.name;
    const source_schema = "public";

    const role = credentials.name;
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
          CREATE SCHEMA IF NOT EXISTS ${target_schema} AUTHORIZATION ${role};
          `
        ),
        client.$executeRawUnsafe(`
          GRANT USAGE ON SCHEMA base TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT USAGE ON SCHEMA ${target_schema} TO ${role};
        `),
        client.$executeRawUnsafe(`
          ALTER DEFAULT PRIVILEGES IN SCHEMA base GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA ${target_schema} TO ${role};
        `),
        client.$executeRawUnsafe(`
          GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA base TO ${role};
        `),
        client.$executeRawUnsafe(`
          ALTER DEFAULT PRIVILEGES IN SCHEMA ${target_schema} GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO ${role};
        `),
        client.$executeRawUnsafe(`
          ALTER DEFAULT PRIVILEGES IN SCHEMA base GRANT SELECT, INSERT, UPDATE ON TABLES TO ${role};
        `),
        client.$queryRaw`SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname=${source_schema};`,
      ])

      const tables = m[m.length - 1] as  { tablename: string }[]

      for (const table of tables) {
        await client.$executeRawUnsafe(
          `CREATE TABLE ${target_schema}.${table.tablename} (LIKE ${source_schema}.${table.tablename} INCLUDING ALL);`
        );
      } 
    } catch (error) {
      console.error(error);
    } finally {
      await client.$disconnect();
    }
  }
}
