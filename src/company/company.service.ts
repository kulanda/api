import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyType, CreateCompanyArgs } from './dto';

@Injectable()
export class CompanyService {
  async createCompany(
    prisma: PrismaService,
    userId: string,
    { caeId, ...dto }: CreateCompanyArgs,
  ): Promise<CompanyType> {
    return await prisma.company.create({
      data: {
        ...dto,
        cae: {
          connect: {
            id: caeId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
  async getCompanies(prisma: PrismaService, userId: string): Promise<CompanyType[]> {
    return await prisma.company.findMany({
      where: {
        userId,
      },
    });
  }
  async getCompany(prisma: PrismaService, id: string): Promise<CompanyType> {
    return await prisma.company.findUnique({
      where: {
        id,
      },
    });
  }
}
