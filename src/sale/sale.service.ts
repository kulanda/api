import { Injectable } from "@nestjs/common";
import { CreateSaleArgs, SaleType } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class SaleService {
  async createSale(
    prisma: PrismaClient,
    sellerId: string,
    {
      orders,
      bankCard,
      cash,
      change,
      totalPrice,
      clientId,
      ...args
    }: CreateSaleArgs
  ): Promise<Omit<SaleType, "order">> {
    const lastSale = await prisma.sale.findFirst({
      orderBy: {
        code: "desc",
      },
    });

    return await prisma.sale.create({
      data: {
        cash,
        bankCard,
        change,
        totalPrice,
        code: typeof lastSale?.code === "number" ? lastSale?.code + 1 : 1,
        ...args,
        client: {
          connect: {
            id: clientId,
          },
        },
        seller: {
          connect: {
            id: sellerId,
          },
        },
        Order: {
          createMany: {
            data: orders,
          },
        },
      },
    });
  }
  async getSales(
    prisma: PrismaClient,
    storeId: string
  ): Promise<Omit<SaleType, "order">[]> {
    return await prisma.sale.findMany({
      where: {
        seller: {
          storeId,
        },
      },
    });
  }
  async getSale(
    prisma: PrismaClient,
    id: string
  ): Promise<Omit<SaleType, "order">> {
    return await prisma.sale.findUnique({
      where: {
        id,
      },
    });
  }
}
