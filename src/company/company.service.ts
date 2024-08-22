import { Injectable } from "@nestjs/common";
import { CompanyType } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}
  async getCompany(tenantId: string): Promise<CompanyType> {
    const rootClient = await this.prismaService.getClient(null, true);
    return await rootClient.company.findFirst({
      where: {
        tenantId,
      },
    });
  }
}
