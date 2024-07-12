import { Injectable } from "@nestjs/common";
import { CAEType, CreateCAEArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CaeService {
  async createCAE(prisma: PrismaClient, dto: CreateCAEArgs): Promise<CAEType> {
    return await prisma.cAE.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(prisma: PrismaClient): Promise<CAEType[]> {
    return await prisma.cAE.findMany();
  }
  async getCAE(prisma: PrismaClient, id: string): Promise<CAEType> {
    return await prisma.cAE.findUnique({
      where: {
        id,
      },
    });
  }
}
