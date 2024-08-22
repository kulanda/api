import { Sale } from '@prisma/client';
import { OrderType } from 'src/order/dto';
export declare class CreateSaleArgs implements Omit<Sale, 'id' | 'createdAt' | 'updatedAt' | 'sellerId'> {
    orders: OrderType[];
    clientId: string;
}
