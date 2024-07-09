import { CreateOrderArgs, OrderType } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class OrderService {
    createOrder(prisma: PrismaService, { ...dto }: CreateOrderArgs): Promise<OrderType>;
    getOrders(prisma: PrismaService, saleId: string): Promise<OrderType[]>;
    getOrder(prisma: PrismaService, id: string): Promise<OrderType>;
}
