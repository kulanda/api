import { Order } from '@prisma/client';
export declare class OrderType implements Order {
    id: string;
    saleId: string;
    productId: string;
    serviceId: string;
    createdAt: Date;
    updatedAt: Date;
}
