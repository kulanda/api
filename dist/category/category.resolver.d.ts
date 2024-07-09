import { CategoryType, CreateCategoryArgs } from "./dto";
import { CategoryService } from "./category.service";
export declare class CategoryResolver {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(req: any, data: CreateCategoryArgs): Promise<CategoryType>;
    getCategories(req: any): Promise<CategoryType[]>;
    getCategory(req: any, id: string): Promise<CategoryType>;
    getCategoriesByStore(req: any, storeId: string): Promise<CategoryType[]>;
}
