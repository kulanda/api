import { Prisma, Service } from '@prisma/client';
export declare class ServiceType implements Service {
    id: string;
    name: string;
    description: string;
    image: string;
    price: Prisma.Decimal;
    categoryId: string;
    storeId: string;
    createdAt: Date;
    updatedAt: Date;
}
