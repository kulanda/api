import { CreateProductArgs, EditProductArgs, FilterProductInput, ProductType } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class ProductService {
    createProduct(prisma: PrismaClient, { categoryId, storeId, ...dto }: CreateProductArgs): Promise<ProductType>;
    editProduct(prisma: PrismaClient, id: string, dto: EditProductArgs): Promise<ProductType>;
    getProducts(prisma: PrismaClient, storeId: string, filter?: FilterProductInput): Promise<ProductType[]>;
    getProductsByOrder(prisma: PrismaClient, orderId: string): Promise<ProductType[]>;
    getProduct(prisma: PrismaClient, id: string): Promise<ProductType>;
}
