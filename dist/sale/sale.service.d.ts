import { CreateSaleArgs, SaleType } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class SaleService {
    createSale(prisma: PrismaClient, sellerId: string, { orders, bankCard, cash, change, totalPrice, clientId, ...args }: CreateSaleArgs): Promise<Omit<SaleType, "order">>;
    getSales(prisma: PrismaClient, storeId: string): Promise<Omit<SaleType, "order">[]>;
    getSale(prisma: PrismaClient, id: string): Promise<Omit<SaleType, "order">>;
}
