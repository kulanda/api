import { CompanyType, CreateCompanyArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class CompanyService {
    createCompany(prisma: PrismaClient, { caeId, tenantId, ...dto }: CreateCompanyArgs): Promise<CompanyType>;
    getCompanies(prisma: PrismaClient, tenantId: string): Promise<CompanyType[]>;
    getCompany(prisma: PrismaClient, id: string): Promise<CompanyType>;
    getCompanyByTenant(prisma: PrismaClient, tenantId: string): Promise<CompanyType>;
}
