import { Prisma, Sale } from '@prisma/client';
import { OrderType } from 'src/order/dto';
export declare class CreateSaleArgs implements Omit<Sale, 'id' | 'createdAt' | 'updatedAt' | 'sellerId' | 'totalPrice'> {
    change: Prisma.Decimal;
    cash: Prisma.Decimal;
    bankCard: Prisma.Decimal;
    totalPrice: Prisma.Decimal;
    orders: OrderType[];
}
