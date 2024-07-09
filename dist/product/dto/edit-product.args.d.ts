import { Prisma, Product } from '@prisma/client';
export declare class EditProductArgs implements Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {
    name: string;
    description: string;
    image: string;
    price: Prisma.Decimal;
    stock: number;
    expiresOn: Date;
    categoryId: string;
    storeId: string;
}
