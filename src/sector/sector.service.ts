import { Injectable } from "@nestjs/common";
import { SectorType, CreateSectorArgs } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SectorService {
  async createSector(
    prisma: PrismaService,
    dto: CreateSectorArgs
  ): Promise<SectorType> {
    return await prisma.sector.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(prisma: PrismaService): Promise<SectorType[]> {
    return await prisma.sector.findMany();
  }
  async getSector(prisma: PrismaService, id: string): Promise<SectorType> {
    return await prisma.sector.findUnique({
      where: {
        id,
      },
    });
  }
}
