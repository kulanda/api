import { Injectable } from "@nestjs/common";
import { CategoryType, CreateCategoryArgs, EditCategoryArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CategoryService {
  async createCategory(
    prisma: PrismaClient,
    { charges, ...dto }: CreateCategoryArgs
  ): Promise<CategoryType> {
    return await prisma.category.create({
      data: {
        ...dto,
        Charge: {
          connect: charges.map((id) => ({
            id,
          })),
        },
      },
    });
  }
  async editCategory(
    prisma: PrismaClient,
    { charges, ...dto }: EditCategoryArgs
  ): Promise<CategoryType> {
    return await prisma.category.update({
      where: {
        id: dto.id,
      },
      data: {
        ...dto,
        Charge: {
          connect: charges.map((id) => ({
            id,
          })),
        },
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
  async getCategoriesByStore(
    prisma: PrismaClient,
    storeId: string
  ): Promise<CategoryType[]> {
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
