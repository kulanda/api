import { Order } from '@prisma/client';
export declare class OrderType implements Order {
    id: string;
    saleId: string;
    creditNoteId: string;
    debitNoteId: string;
    productId: string;
    serviceId: string;
    createdAt: Date;
    updatedAt: Date;
}
