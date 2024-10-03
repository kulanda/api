import { Prisma, Service } from "@prisma/client";
export declare class ServiceType implements Omit<Service, "image"> {
    id: string;
    code: number;
    name: string;
    description: string;
    price: Prisma.Decimal;
    categoryId: string;
    storeId: string;
    createdAt: Date;
    updatedAt: Date;
}
