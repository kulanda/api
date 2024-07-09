import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyType, CreateCompanyArgs } from './dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async createCompany(
    userId: string,
    { caeId, ...dto }: CreateCompanyArgs,
  ): Promise<CompanyType> {
    return await this.prisma.company.create({
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
  async getCompanies(userId: string): Promise<CompanyType[]> {
    return await this.prisma.company.findMany({
      where: {
        userId,
      },
    });
  }
  async getCompany(id: string): Promise<CompanyType> {
    return await this.prisma.company.findUnique({
      where: {
        id,
      },
    });
  }
}
