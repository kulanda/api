import { Injectable } from "@nestjs/common";
import { SupplierType, CreateSupplierArgs } from "./dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { FilterSupplierInput } from "./dto/filter-supplier.input";

@Injectable()
export class SupplierService {
  async createSupplier(
    prisma: PrismaClient,
    dto: CreateSupplierArgs
  ): Promise<SupplierType> {
    return await prisma.supplier.create({
      data: {
        ...dto,
      },
    });
  }
  async getSuppliers(
    prisma: PrismaClient,
    filter?: FilterSupplierInput
  ): Promise<SupplierType[]> {
    const where: Prisma.SupplierScalarWhereInput = {
      storeId: filter.storeId,
      OR: [
        {
          fullName: {
            contains: filter?.fullName,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: filter?.email,
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: filter?.phone,
            mode: "insensitive",
          },
        },
      ],
    };

    if (filter?.paginate)
      return await prisma.supplier.findMany({
        skip: (filter.paginate.page - 1) * filter.paginate.limit,
        take: filter.paginate.limit,
        where,
      });
    else
      return await prisma.supplier.findMany({
        where,
      });
  }
  async getSupplier(prisma: PrismaClient, id: string): Promise<SupplierType> {
    return await prisma.supplier.findUnique({
      where: {
        id,
      },
    });
  }
  async getSuppliersByStore(
    prisma: PrismaClient,
    storeId: string
  ): Promise<SupplierType[]> {
    return await prisma.supplier.findMany({
      where: {
        storeId,
      },
    });
  }
  async getSuppliersByProductId(
    prisma: PrismaClient,
    productId: string
  ): Promise<SupplierType[]> {
    return await prisma.supplier.findMany({
      where: {
        SupplierOnProduct: {
          some: {
            productId,
          },
        },
      },
    });
  }
}
