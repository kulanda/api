import { Prisma, Sale } from "@prisma/client";
export declare class SaleType implements Omit<Sale, "SaleId" | "order"> {
    id: string;
    change: Prisma.Decimal;
    code: number;
    cash: Prisma.Decimal;
    bankCard: Prisma.Decimal;
    totalPrice: Prisma.Decimal;
    sellerId: string;
    clientId: string;
    createdAt: Date;
    updatedAt: Date;
}
