import { Prisma, Product } from '@prisma/client';
export declare class ProductType implements Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: Prisma.Decimal;
    code: number;
    withholding: boolean;
    categoryId: string;
    storeId: string;
    createdAt: Date;
    updatedAt: Date;
}
