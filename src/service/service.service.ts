import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceArgs, EditServiceArgs, ServiceType } from './dto';
import { FilterServiceInput } from './dto/filter-service.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}
  async createService({
    categoryId,
    storeId,
    ...dto
  }: CreateServiceArgs): Promise<ServiceType> {
    return await this.prisma.service.create({
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
  async editService(id: string, dto: EditServiceArgs): Promise<ServiceType> {
    return await this.prisma.service.update({
      data: {
        ...dto,
      },
      where: {
        id,
      },
    });
  }
  async getServices(
    storeId: string,
    filter?: FilterServiceInput,
  ): Promise<ServiceType[]> {
    const where: Prisma.ServiceWhereInput = {
      storeId,
      categoryId: filter.categoryId,
      name: {
        contains: filter.name,
      },
    };

    if (filter.paginate)
      return await this.prisma.service.findMany({
        skip: (filter.paginate.page - 1) * filter.paginate.limit,
        take: filter.paginate.limit,
        where,
      });
    else
      return await this.prisma.service.findMany({
        where,
      });
  }
  async getServicesByOrder(orderId: string): Promise<ServiceType[]> {
    return await this.prisma.service.findMany({
      where: {
        Order: {
          some: {
            id: orderId,
          },
        },
      },
    });
  }
  async getService(id: string): Promise<ServiceType> {
    return await this.prisma.service.findUnique({
      where: {
        id,
      },
    });
  }
}
