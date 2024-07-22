import { Injectable } from "@nestjs/common";
import { ClientType, CreateClientArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ClientService {
  async createClient(
    prisma: PrismaClient,
    dto: CreateClientArgs
  ): Promise<ClientType> {
    return await prisma.client.create({
      data: {
        ...dto,
      },
    });
  }
  async getClients(prisma: PrismaClient): Promise<ClientType[]> {
    return await prisma.client.findMany();
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
