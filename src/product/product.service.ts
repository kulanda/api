import { Injectable } from "@nestjs/common";
import {
  CreateProductArgs,
  EditProductArgs,
  FilterProductInput,
  ProductType,
} from "./dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { join } from "path";
import { createWriteStream, existsSync, mkdirSync } from "fs";

@Injectable()
export class ProductService {
  async createProduct(
    prisma: PrismaClient,
    tenantId: string,
    image: any,
    { categoryId, storeId, suppliers, charges, ...dto }: CreateProductArgs
  ): Promise<ProductType> {
    const dirPath = join("uploads/images/" + tenantId);
    const imageURL = `${dirPath}/${image?.filename}`;

    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }

    image && image?.createReadStream?.()?.pipe?.(createWriteStream(imageURL));

    return await prisma.product.create({
      data: {
        image: image ? imageURL : undefined,
        ...dto,
        Charge: {
          connect: charges.map((id) => ({
            id,
          })),
        },
        store: {
          connect: {
            id: storeId,
          },
        },
        SupplierOnProduct: {
          create: suppliers.map((item) => item),
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
    tenantId: string,
    id: string,
    { charges, ...dto }: EditProductArgs
  ): Promise<ProductType> {
    let imageURL = "";
    if (dto?.image) {
      const dirPath = join("uploads/images/" + tenantId);

      imageURL = `${dirPath}/${dto?.image?.filename}`;

      if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
      }
      dto?.image?.createReadStream?.()?.pipe?.(createWriteStream(imageURL));
    }
    return await prisma.product.update({
      data: {
        image: dto?.image ? imageURL : undefined,
        ...dto,
        Charge: {
          connect: charges.map((id) => ({
            id,
          })),
        },
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
