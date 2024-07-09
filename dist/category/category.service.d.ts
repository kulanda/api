import { CategoryType, CreateCategoryArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoryService {
    createCategory(prisma: PrismaService, dto: CreateCategoryArgs): Promise<CategoryType>;
    getCategories(prisma: PrismaService): Promise<CategoryType[]>;
    getCategory(prisma: PrismaService, id: string): Promise<CategoryType>;
    getCategoriesByStore(prisma: PrismaService, storeId: string): Promise<CategoryType[]>;
}
