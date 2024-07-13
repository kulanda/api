import { Prisma, Sale } from '@prisma/client';
export declare class SaleType implements Omit<Sale, 'SaleId' | 'order' | 'code'> {
    id: string;
    change: Prisma.Decimal;
    cash: Prisma.Decimal;
    bankCard: Prisma.Decimal;
    totalPrice: Prisma.Decimal;
    sellerId: string;
    createdAt: Date;
    updatedAt: Date;
}
