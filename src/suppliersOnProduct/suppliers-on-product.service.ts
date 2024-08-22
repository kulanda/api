import { Injectable } from "@nestjs/common";
import { SupplierOnProductType, CreateSupplierOnProductArgs } from "./dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { FilterSupplierOnProductInput } from "./dto/filter-suppliers-on-product.input";

@Injectable()
export class SupplierOnProductService {
  async createSupplierOnProduct(
    prisma: PrismaClient,
    dto: CreateSupplierOnProductArgs
  ): Promise<SupplierOnProductType> {
    return await prisma.supplierOnProduct.create({
      data: {
        ...dto,
      },
    });
  }
  async getSupplierOnProducts(
    prisma: PrismaClient,
    filter?: FilterSupplierOnProductInput
  ): Promise<SupplierOnProductType[]> {
    const where: Prisma.SupplierOnProductScalarWhereInput = {
      OR: [
        {
          productId: filter.productId
        },
        {
          supplierId: filter.supplierId,
        },
      ],
    };

    if (filter?.paginate)
      return await prisma.supplierOnProduct.findMany({
        skip: (filter.paginate.page - 1) * filter.paginate.limit,
        take: filter.paginate.limit,
        where,
      });
    else
      return await prisma.supplierOnProduct.findMany({
        where,
      });
  }
  async getSupplierOnProduct(prisma: PrismaClient, id: string): Promise<SupplierOnProductType> {
    return await prisma.supplierOnProduct.findUnique({
      where: {
        id,
      },
    });
  }
  async getSupplierOnProductByProductId(prisma: PrismaClient, productId: string): Promise<SupplierOnProductType[]> {
    return await prisma.supplierOnProduct.findMany({
      where: {
        productId
      },
    });
  }
  async getSupplierOnProductBySupplierId(prisma: PrismaClient, supplierId: string): Promise<SupplierOnProductType[]> {
    return await prisma.supplierOnProduct.findMany({
      where: {
        supplierId
      },
    });
  }
}
