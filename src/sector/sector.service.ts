import { Injectable } from '@nestjs/common';
import { SectorType, CreateSectorArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SectorService {
  constructor(private prisma: PrismaService) {}
  async createSector(dto: CreateSectorArgs): Promise<SectorType> {
    return await this.prisma.sector.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(): Promise<SectorType[]> {
    return await this.prisma.sector.findMany();
  }
  async getSector(id: string): Promise<SectorType> {
    return await this.prisma.sector.findUnique({
      where: {
        id,
      },
    });
  }
}
