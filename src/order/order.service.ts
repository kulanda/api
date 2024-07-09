import { Injectable } from '@nestjs/common';
import { CreateOrderArgs, OrderType } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  async createOrder({ ...dto }: CreateOrderArgs): Promise<OrderType> {
    return await this.prisma.order.create({
      data: {
        ...dto,
      },
    });
  }

  async getOrders(saleId: string): Promise<OrderType[]> {
    return await this.prisma.order.findMany({
      where: {
        saleId,
      },
    });
  }
  async getOrder(id: string): Promise<OrderType> {
    return await this.prisma.order.findUnique({
      where: {
        id,
      },
    });
  }
}
