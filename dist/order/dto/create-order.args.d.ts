import { Order } from '@prisma/client';
export declare class CreateOrderArgs implements Omit<Order, 'id' | 'createdAt' | 'updatedAt'> {
    saleId: string;
    productId: string;
    serviceId: string;
}
