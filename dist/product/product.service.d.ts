import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductArgs, EditProductArgs, FilterProductInput, ProductType } from './dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    createProduct({ categoryId, storeId, ...dto }: CreateProductArgs): Promise<ProductType>;
    editProduct(id: string, dto: EditProductArgs): Promise<ProductType>;
    getProducts(storeId: string, filter?: FilterProductInput): Promise<ProductType[]>;
    getProductsByOrder(orderId: string): Promise<ProductType[]>;
    getProduct(id: string): Promise<ProductType>;
}
