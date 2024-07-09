import { CategoryType, CreateCategoryArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    createCategory(dto: CreateCategoryArgs): Promise<CategoryType>;
    getCategories(): Promise<CategoryType[]>;
    getCategory(id: string): Promise<CategoryType>;
    getCategoriesByStore(storeId: string): Promise<CategoryType[]>;
}
