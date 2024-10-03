import { Prisma, Service } from "@prisma/client";
export declare class CreateServiceArgs implements Omit<Service, "id" | "createdAt" | "updatedAt" | "image"> {
    code: number;
    name: string;
    description: string;
    price: Prisma.Decimal;
    categoryId: string;
    charges: string[];
    storeId: string;
}
