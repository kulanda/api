import { CreateProductArgs, EditProductArgs, FilterProductInput, ProductType } from './dto';
import { ProductService } from './product.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryType } from 'src/category/dto';
export declare class ProductResolver {
    private productService;
    private categoryService;
    constructor(productService: ProductService, categoryService: CategoryService);
    createProduct(_: string, data: CreateProductArgs): Promise<ProductType>;
    editProduct(_: string, id: string, data: EditProductArgs): Promise<ProductType>;
    getProducts(storeId: string, filter: FilterProductInput): Promise<ProductType[]>;
    getProduct(id: string): Promise<ProductType>;
    category(product: ProductType): Promise<CategoryType>;
}
