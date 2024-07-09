import { Injectable } from "@nestjs/common";
import { CreateSaleArgs, SaleType } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SaleService {
  async createSale(
    prisma: PrismaService,
    sellerId: string,
    { orders, bankCard, cash, change, totalPrice }: CreateSaleArgs
  ): Promise<Omit<SaleType, "order">> {
    return await prisma.sale.create({
      data: {
        cash,
        bankCard,
        change,
        totalPrice,
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
    prisma: PrismaService,
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
    prisma: PrismaService,
    id: string
  ): Promise<Omit<SaleType, "order">> {
    return await prisma.sale.findUnique({
      where: {
        id,
      },
    });
  }
}
