import { CreateOrderArgs, OrderType } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class OrderService {
    createOrder(prisma: PrismaClient, { ...dto }: CreateOrderArgs): Promise<OrderType>;
    getOrders(prisma: PrismaClient, saleId: string): Promise<OrderType[]>;
    getOrder(prisma: PrismaClient, id: string): Promise<OrderType>;
    getOrdersBySaleId(prisma: PrismaClient, saleId: string): Promise<{
        id: string;
        saleId: string;
        debitNoteId: string;
        creditNoteId: string;
        productId: string;
        serviceId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getOrdersByCreditNoteId(prisma: PrismaClient, creditNoteId: string): Promise<{
        id: string;
        saleId: string;
        debitNoteId: string;
        creditNoteId: string;
        productId: string;
        serviceId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getOrdersByDebitNoteId(prisma: PrismaClient, debitNoteId: string): Promise<{
        id: string;
        saleId: string;
        debitNoteId: string;
        creditNoteId: string;
        productId: string;
        serviceId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
