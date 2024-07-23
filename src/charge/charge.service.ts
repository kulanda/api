import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { ChargeType, CreateChargeArgs } from "./dto";

@Injectable()
export class ChargeService {
  async createCharge(
    prisma: PrismaClient,
    dto: CreateChargeArgs
  ): Promise<ChargeType> {
    return await prisma.charge.create({
      data: {
        ...dto,
      },
    });
  }
  async getCharges(
    prisma: PrismaClient,
    filter?: Prisma.ChargeWhereInput
  ): Promise<ChargeType[]> {
    return await prisma.charge.findMany({
      where: filter,
    });
  }
  async getCharge(prisma: PrismaClient, id: string): Promise<ChargeType> {
    return await prisma.charge.findUnique({
      where: {
        id,
      },
    });
  }
  async getChargesByStore(
    prisma: PrismaClient,
    storeId: string
  ): Promise<ChargeType[]> {
    return await prisma.charge.findMany({
      where: {
        storeId,
      },
    });
  }
}
