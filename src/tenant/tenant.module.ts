import { Module } from "@nestjs/common";
import { TenantService } from "./tenant.service";
import { TenantResolver } from "./tenant.resolver";
import { PrismaService } from "src/prisma/prisma.service";
import { CompanyService } from "src/company/company.service";

@Module({
  providers: [TenantService, TenantResolver, PrismaService, CompanyService],
})
export class TenantModule {}
