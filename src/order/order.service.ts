import { Injectable } from "@nestjs/common";
import { CreateOrderArgs, OrderType } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class OrderService {
  async createOrder(
    prisma: PrismaClient,
    { ...dto }: CreateOrderArgs
  ): Promise<OrderType> {
    return await prisma.order.create({
      data: {
        ...dto,
      },
    });
  }

  async getOrders(prisma: PrismaClient, saleId: string): Promise<OrderType[]> {
    return await prisma.order.findMany({
      where: {
        saleId,
      },
    });
  }
  async getOrder(prisma: PrismaClient, id: string): Promise<OrderType> {
    return await prisma.order.findUnique({
      where: {
        id,
      },
    });
  }
  async getOrdersBySaleId(prisma: PrismaClient, saleId: string) {
    return await prisma.order.findMany({
      where: {
        saleId
      },
    });
  }
  async getOrdersByCreditNoteId(prisma: PrismaClient, creditNoteId: string) {
    return await prisma.order.findMany({
      where: {
        creditNoteId
      },
    });
  }
  async getOrdersByDebitNoteId(prisma: PrismaClient, debitNoteId: string) {
    return await prisma.order.findMany({
      where: {
        debitNoteId
      },
    });
  }
}
