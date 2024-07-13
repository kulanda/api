import { Injectable } from "@nestjs/common";
import {
  CreateProductArgs,
  EditProductArgs,
  FilterProductInput,
  ProductType,
} from "./dto";
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class ProductService {
  async createProduct(
    prisma: PrismaClient,
    { categoryId, storeId, ...dto }: CreateProductArgs
  ): Promise<ProductType> {
    return await prisma.product.create({
      data: {
        ...dto,
        store: {
          connect: {
            id: storeId,
          },
        },
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
  }
  async editProduct(
    prisma: PrismaClient,
    id: string,
    dto: EditProductArgs
  ): Promise<ProductType> {
    return await prisma.product.update({
      data: {
        ...dto,
      },
      where: {
        id,
      },
    });
  }
  async getProducts(
    prisma: PrismaClient,
    storeId: string,
    filter?: FilterProductInput
  ): Promise<ProductType[]> {
    const where: Prisma.ProductScalarWhereInput = {
      storeId,
      categoryId: filter?.categoryId,
      name: {
        contains: filter?.name,
        mode: "insensitive",
      },
    };

    if (filter?.paginate)
      return await prisma.product.findMany({
        skip: (filter.paginate.page - 1) * filter.paginate.limit,
        take: filter.paginate.limit,
        where,
      });
    else
      return await prisma.product.findMany({
        where,
      });
  }
  async getProductsByOrder(
    prisma: PrismaClient,
    orderId: string
  ): Promise<ProductType[]> {
    return await prisma.product.findMany({
      where: {
        Order: {
          some: {
            id: orderId,
          },
        },
      },
    });
  }
  async getProduct(prisma: PrismaClient, id: string): Promise<ProductType> {
    return await prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}
