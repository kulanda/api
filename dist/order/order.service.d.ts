import { CreateOrderArgs, OrderType } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class OrderService {
    createOrder(prisma: PrismaClient, { ...dto }: CreateOrderArgs): Promise<OrderType>;
    getOrders(prisma: PrismaClient, saleId: string): Promise<OrderType[]>;
    getOrder(prisma: PrismaClient, id: string): Promise<OrderType>;
}
