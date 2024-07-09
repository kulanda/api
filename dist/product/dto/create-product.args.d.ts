import { Prisma, Product } from '@prisma/client';
export declare class CreateProductArgs implements Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {
    name: string;
    description: string;
    image: string;
    price: Prisma.Decimal;
    stock: number;
    expiresOn: Date;
    categoryId: string;
    storeId: string;
}
