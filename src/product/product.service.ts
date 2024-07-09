import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {
  CreateProductArgs,
  EditProductArgs,
  FilterProductInput,
  ProductType,
} from "./dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductService {
  async createProduct(
    prisma: PrismaService,
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
    prisma: PrismaService,
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
    prisma: PrismaService,
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
    prisma: PrismaService,
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
  async getProduct(prisma: PrismaService, id: string): Promise<ProductType> {
    return await prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}
