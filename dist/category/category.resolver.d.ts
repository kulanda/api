import { CategoryType, CreateCategoryArgs } from "./dto";
import { CategoryService } from "./category.service";
import { ChargeType } from "src/charge/dto";
import { ChargeService } from "src/charge/charge.service";
export declare class CategoryResolver {
    private categoryService;
    private chargeService;
    constructor(categoryService: CategoryService, chargeService: ChargeService);
    createCategory(req: any, data: CreateCategoryArgs): Promise<CategoryType>;
    getCategories(req: any): Promise<CategoryType[]>;
    getCategory(req: any, id: string): Promise<CategoryType>;
    getCategoriesByStore(req: any, storeId: string): Promise<CategoryType[]>;
    charges(req: any, category: CategoryType): Promise<ChargeType[]>;
}
