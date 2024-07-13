import { Injectable } from "@nestjs/common";
import { CAEType, CreateCAEArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CaeService {
  constructor(private prismaService: PrismaService) {}
  async createCAE(dto: CreateCAEArgs): Promise<CAEType> {
    const rootClient = await this.prismaService.getClient(null, true);
    return await rootClient.cAE.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(prisma: PrismaClient): Promise<CAEType[]> {
    return await prisma.cAE.findMany();
  }
  async getCAE(id: string): Promise<CAEType> {
    const rootClient = await this.prismaService.getClient(null, true);
    return await rootClient.cAE.findUnique({
      where: {
        id,
      },
    });
  }
}
