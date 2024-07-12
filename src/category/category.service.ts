import { Injectable } from '@nestjs/common';
import { CategoryType, CreateCategoryArgs } from './dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryService {
  async createCategory(prisma: PrismaClient, dto: CreateCategoryArgs): Promise<CategoryType> {
    return await prisma.category.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(prisma: PrismaClient): Promise<CategoryType[]> {
    return await prisma.category.findMany();
  }
  async getCategory(prisma: PrismaClient, id: string): Promise<CategoryType> {
    return await prisma.category.findUnique({
      where: {
        id,
      },
    });
  }
  async getCategoriesByStore(prisma: PrismaClient, storeId: string): Promise<CategoryType[]> {
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
