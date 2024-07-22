import { Prisma, Service } from '@prisma/client';
export declare class EditServiceArgs implements Omit<Service, 'id' | 'createdAt' | 'updatedAt'> {
    name: string;
    description: string;
    image: string;
    price: Prisma.Decimal;
    categoryId: string;
    charges: string[];
    storeId: string;
}
