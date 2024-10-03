import { Prisma, Product } from "@prisma/client";
import { ProductSupplierInput } from "./product-supplier.input";
export declare class CreateProductArgs implements Omit<Product, "id" | "createdAt" | "updatedAt" | 'image'> {
    name: string;
    description: string;
    price: Prisma.Decimal;
    code: number;
    withholding: boolean;
    categoryId: string;
    charges: string[];
    suppliers: ProductSupplierInput[];
    storeId: string;
}
