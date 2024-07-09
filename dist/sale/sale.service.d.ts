import { CreateSaleArgs, SaleType } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class SaleService {
    createSale(prisma: PrismaService, sellerId: string, { orders, bankCard, cash, change, totalPrice }: CreateSaleArgs): Promise<Omit<SaleType, "order">>;
    getSales(prisma: PrismaService, storeId: string): Promise<Omit<SaleType, "order">[]>;
    getSale(prisma: PrismaService, id: string): Promise<Omit<SaleType, "order">>;
}
