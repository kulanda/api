import { Injectable } from "@nestjs/common";
import { CreateServiceArgs, EditServiceArgs, ServiceType } from "./dto";
import { FilterServiceInput } from "./dto/filter-service.input";
import { Prisma, PrismaClient } from "@prisma/client";
import { join } from "path";
import { createWriteStream, existsSync, mkdirSync } from "fs";

@Injectable()
export class ServiceService {
  async createService(
    prisma: PrismaClient,
    tenantId: string,
    { categoryId, storeId, charges, ...dto }: CreateServiceArgs
  ): Promise<ServiceType> {
    const dirPath = join("uploads/images/" + tenantId);

    const imageURL = `${dirPath}/${dto?.image?.filename}`;

    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
    dto?.image?.createReadStream?.()?.pipe?.(createWriteStream(imageURL));
    return await prisma.service.create({
      data: {
        image: dto?.image ? imageURL : undefined,
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
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
  }
  async editService(
    prisma: PrismaClient,
    tenantId: string,
    id: string,
    { charges, ...dto }: EditServiceArgs
  ): Promise<ServiceType> {
    let imageURL = "";
    if (dto?.image) {
      const dirPath = join("uploads/images/" + tenantId);

      imageURL = `${dirPath}/${dto?.image?.filename}`;

      if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
      }
      dto?.image?.createReadStream?.()?.pipe?.(createWriteStream(imageURL));
    }
    return await prisma.service.update({
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
  async getServices(
    prisma: PrismaClient,
    storeId: string,
    filter?: FilterServiceInput
  ): Promise<ServiceType[]> {
    const where: Prisma.ServiceWhereInput = {
      storeId,
      categoryId: filter.categoryId,
      name: {
        contains: filter.name,
      },
    };

    if (filter.paginate)
      return await prisma.service.findMany({
        skip: (filter.paginate.page - 1) * filter.paginate.limit,
        take: filter.paginate.limit,
        where,
      });
    else
      return await prisma.service.findMany({
        where,
      });
  }
  async getServicesByOrder(
    prisma: PrismaClient,
    orderId: string
  ): Promise<ServiceType[]> {
    return await prisma.service.findMany({
      where: {
        Order: {
          some: {
            id: orderId,
          },
        },
      },
    });
  }
  async getService(prisma: PrismaClient, id: string): Promise<ServiceType> {
    return await prisma.service.findUnique({
      where: {
        id,
      },
    });
  }
}
