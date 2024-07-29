import { CategoryType, CreateCategoryArgs, EditCategoryArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class CategoryService {
    createCategory(prisma: PrismaClient, { charges, ...dto }: CreateCategoryArgs): Promise<CategoryType>;
    editCategory(prisma: PrismaClient, { charges, ...dto }: EditCategoryArgs): Promise<CategoryType>;
    getCategories(prisma: PrismaClient): Promise<CategoryType[]>;
    getCategory(prisma: PrismaClient, id: string): Promise<CategoryType>;
    getCategoriesByStore(prisma: PrismaClient, storeId: string): Promise<CategoryType[]>;
}
