import { Injectable } from "@nestjs/common";
import { SectorType, CreateSectorArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SectorService {
  constructor(private prismaService: PrismaService) {}
  async createSector(
    dto: CreateSectorArgs
  ): Promise<SectorType> {
    const rootClient = await this.prismaService.getClient(null, true);
    return await rootClient.sector.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(): Promise<SectorType[]> {
    const rootClient = await this.prismaService.getClient(null, true);
    return await rootClient.sector.findMany();
  }
  async getSector(id: string): Promise<SectorType> {
    const rootClient = await this.prismaService.getClient(null, true);
    return await rootClient.sector.findUnique({
      where: {
        id,
      },
    });
  }
}
