import { Injectable } from "@nestjs/common";
import { CreateSaleArgs, SaleType } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class SaleService {
  async createSale(
    prisma: PrismaClient,
    sellerId: string,
    { orders, clientId, ...args }: CreateSaleArgs
  ): Promise<Omit<SaleType, "order">> {
    return await prisma.sale.create({
      data: {
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
        Order: {
          some: {
            OR: [
              {
                service: {
                  storeId,
                },
              },
              {
                product: {
                  storeId,
                },
              },
            ],
          },
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
