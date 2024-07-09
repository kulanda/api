import { Injectable } from '@nestjs/common';
import { CAEType, CreateCAEArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CaeService {
  constructor(private prisma: PrismaService) {}
  async createCAE(dto: CreateCAEArgs): Promise<CAEType> {
    return await this.prisma.cAE.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(): Promise<CAEType[]> {
    return await this.prisma.cAE.findMany();
  }
  async getCAE(id: string): Promise<CAEType> {
    return await this.prisma.cAE.findUnique({
      where: {
        id,
      },
    });
  }
}
