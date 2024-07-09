import { Injectable } from "@nestjs/common";
import { CAEType, CreateCAEArgs } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CaeService {
  async createCAE(prisma: PrismaService, dto: CreateCAEArgs): Promise<CAEType> {
    return await prisma.cAE.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(prisma: PrismaService): Promise<CAEType[]> {
    return await prisma.cAE.findMany();
  }
  async getCAE(prisma: PrismaService, id: string): Promise<CAEType> {
    return await prisma.cAE.findUnique({
      where: {
        id,
      },
    });
  }
}
