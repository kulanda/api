import { CategoryType, CreateCategoryArgs } from './dto';
import { CategoryService } from './category.service';
export declare class CategoryResolver {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(data: CreateCategoryArgs): Promise<CategoryType>;
    getCategories(): Promise<CategoryType[]>;
    getCategory(id: string): Promise<CategoryType>;
    getCategoriesByStore(storeId: string): Promise<CategoryType[]>;
}
