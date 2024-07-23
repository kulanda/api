import { CreateProductArgs, EditProductArgs, FilterProductInput, ProductType } from "./dto";
import { ProductService } from "./product.service";
import { CategoryService } from "src/category/category.service";
import { CategoryType } from "src/category/dto";
import { ChargeType } from "src/charge/dto";
import { ChargeService } from "src/charge/charge.service";
export declare class ProductResolver {
    private productService;
    private categoryService;
    private chargeService;
    constructor(productService: ProductService, categoryService: CategoryService, chargeService: ChargeService);
    createProduct(req: any, _: string, data: CreateProductArgs): Promise<ProductType>;
    editProduct(req: any, _: string, id: string, data: EditProductArgs): Promise<ProductType>;
    getProducts(req: any, storeId: string, filter: FilterProductInput): Promise<ProductType[]>;
    getProduct(req: any, id: string): Promise<ProductType>;
    category(req: any, product: ProductType): Promise<CategoryType>;
    charges(req: any, product: ProductType): Promise<ChargeType[]>;
}
