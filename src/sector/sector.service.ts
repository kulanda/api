import { Injectable } from "@nestjs/common";
import { SectorType, CreateSectorArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class SectorService {
  async createSector(
    prisma: PrismaClient,
    dto: CreateSectorArgs
  ): Promise<SectorType> {
    return await prisma.sector.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(prisma: PrismaClient): Promise<SectorType[]> {
    return await prisma.sector.findMany();
  }
  async getSector(prisma: PrismaClient, id: string): Promise<SectorType> {
    return await prisma.sector.findUnique({
      where: {
        id,
      },
    });
  }
}
