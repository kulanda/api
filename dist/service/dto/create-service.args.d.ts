import { Prisma, Service } from "@prisma/client";
export declare class CreateServiceArgs implements Omit<Service, "id" | "createdAt" | "updatedAt"> {
    name: string;
    description: string;
    price: Prisma.Decimal;
    image: any;
    categoryId: string;
    charges: string[];
    storeId: string;
}
