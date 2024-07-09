import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductArgs, EditProductArgs, FilterProductInput, ProductType } from "./dto";
export declare class ProductService {
    createProduct(prisma: PrismaService, { categoryId, storeId, ...dto }: CreateProductArgs): Promise<ProductType>;
    editProduct(prisma: PrismaService, id: string, dto: EditProductArgs): Promise<ProductType>;
    getProducts(prisma: PrismaService, storeId: string, filter?: FilterProductInput): Promise<ProductType[]>;
    getProductsByOrder(prisma: PrismaService, orderId: string): Promise<ProductType[]>;
    getProduct(prisma: PrismaService, id: string): Promise<ProductType>;
}
