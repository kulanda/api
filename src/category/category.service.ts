import { Injectable } from '@nestjs/common';
import { CategoryType, CreateCategoryArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  async createCategory(prisma: PrismaService, dto: CreateCategoryArgs): Promise<CategoryType> {
    return await prisma.category.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(prisma: PrismaService): Promise<CategoryType[]> {
    return await prisma.category.findMany();
  }
  async getCategory(prisma: PrismaService, id: string): Promise<CategoryType> {
    return await prisma.category.findUnique({
      where: {
        id,
      },
    });
  }
  async getCategoriesByStore(prisma: PrismaService, storeId: string): Promise<CategoryType[]> {
    return await prisma.category.findMany({
      where: {
        Service: {
          every: {
            storeId,
          },
        },
        Product: {
          every: {
            storeId,
          },
        },
      },
    });
  }
}
