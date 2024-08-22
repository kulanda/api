import { Prisma, Product } from "@prisma/client";
import { ProductSupplierInput } from "./product-supplier.input";
export declare class EditProductArgs implements Omit<Product, "id" | "createdAt" | "updatedAt"> {
    name: string;
    description: string;
    image: any;
    price: Prisma.Decimal;
    expiresOn: Date;
    categoryId: string;
    charges: string[];
    suppliers: ProductSupplierInput[];
    storeId: string;
}
