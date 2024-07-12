import { CategoryType, CreateCategoryArgs } from './dto';
import { PrismaClient } from '@prisma/client';
export declare class CategoryService {
    createCategory(prisma: PrismaClient, dto: CreateCategoryArgs): Promise<CategoryType>;
    getCategories(prisma: PrismaClient): Promise<CategoryType[]>;
    getCategory(prisma: PrismaClient, id: string): Promise<CategoryType>;
    getCategoriesByStore(prisma: PrismaClient, storeId: string): Promise<CategoryType[]>;
}
