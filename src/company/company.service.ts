import { Injectable } from "@nestjs/common";
import { CompanyType, CreateCompanyArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CompanyService {
  async createCompany(
    prisma: PrismaClient,
    { caeId, tenantId, ...dto }: CreateCompanyArgs
  ): Promise<CompanyType> {
    return await prisma.company.create({
      data: {
        ...dto,
        cae: {
          connect: {
            id: caeId,
          },
        },
        tenant: {
          connect: {
            id: tenantId,
          },
        },
      },
    });
  }
  async getCompanies(
    prisma: PrismaClient,
    tenantId: string
  ): Promise<CompanyType[]> {
    return await prisma.company.findMany({
      where: {
        tenantId,
      },
    });
  }
  async getCompany(prisma: PrismaClient, id: string): Promise<CompanyType> {
    return await prisma.company.findUnique({
      where: {
        id,
      },
    });
  }
  async getCompanyByTenant(
    prisma: PrismaClient,
    tenantId: string
  ): Promise<CompanyType> {
    return await prisma.company.findFirst({
      where: {
        tenant: {
          id: tenantId,
        },
      },
    });
  }
}
