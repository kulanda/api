import { Injectable } from '@nestjs/common';
import { CategoryType, CreateCategoryArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async createCategory(dto: CreateCategoryArgs): Promise<CategoryType> {
    return await this.prisma.category.create({
      data: {
        ...dto,
      },
    });
  }
  async getCategories(): Promise<CategoryType[]> {
    return await this.prisma.category.findMany();
  }
  async getCategory(id: string): Promise<CategoryType> {
    return await this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }
  async getCategoriesByStore(storeId: string): Promise<CategoryType[]> {
    return await this.prisma.category.findMany({
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
