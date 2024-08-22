import { Injectable } from "@nestjs/common";
import { ClientType, CreateClientArgs } from "./dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { FilterClientInput } from "./dto/filter-client.input";

@Injectable()
export class ClientService {
  async createClient(
    prisma: PrismaClient,
    { caeId, storeId, ...dto }: CreateClientArgs
  ): Promise<ClientType> {
    return await prisma.client.create({
      data: {
        ...dto,
        caeId: caeId as never,
        store: {
          connect: {
            id: storeId,
          },
        },
      },
    });
  }
  async getClients(
    prisma: PrismaClient,
    filter?: FilterClientInput
  ): Promise<ClientType[]> {
    const where: Prisma.ClientScalarWhereInput = {
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
      return await prisma.client.findMany({
        skip: (filter.paginate.page - 1) * filter.paginate.limit,
        take: filter.paginate.limit,
        where,
      });
    else
      return await prisma.client.findMany({
        where,
      });
  }
  async getClient(prisma: PrismaClient, id: string): Promise<ClientType> {
    return await prisma.client.findUnique({
      where: {
        id,
      },
    });
  }
  async getClientsByStore(
    prisma: PrismaClient,
    storeId: string
  ): Promise<ClientType[]> {
    return await prisma.client.findMany({
      where: {
        storeId,
      },
    });
  }
}
