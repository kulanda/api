import { Order } from '@prisma/client';
export declare class CreateOrderArgs implements Omit<Order, 'id' | 'createdAt' | 'updatedAt'> {
    saleId: string;
    debitNoteId: string;
    creditNoteId: string;
    productId: string;
    serviceId: string;
}
