import { Injectable } from '@nestjs/common';
import { CreateSaleArgs, SaleType } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}
  async createSale(
    sellerId: string,
    { orders, bankCard, cash, change, totalPrice }: CreateSaleArgs,
  ): Promise<Omit<SaleType, 'order'>> {
    return await this.prisma.sale.create({
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
  async getSales(storeId: string): Promise<Omit<SaleType, 'order'>[]> {
    return await this.prisma.sale.findMany({
      where: {
        seller: {
          storeId,
        },
      },
    });
  }
  async getSale(id: string): Promise<Omit<SaleType, 'order'>> {
    return await this.prisma.sale.findUnique({
      where: {
        id,
      },
    });
  }
}
