import { Injectable } from "@nestjs/common";
import { CreateOrderArgs, OrderType } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderService {
  async createOrder(
    prisma: PrismaService,
    { ...dto }: CreateOrderArgs
  ): Promise<OrderType> {
    return await prisma.order.create({
      data: {
        ...dto,
      },
    });
  }

  async getOrders(prisma: PrismaService, saleId: string): Promise<OrderType[]> {
    return await prisma.order.findMany({
      where: {
        saleId,
      },
    });
  }
  async getOrder(prisma: PrismaService, id: string): Promise<OrderType> {
    return await prisma.order.findUnique({
      where: {
        id,
      },
    });
  }
}
