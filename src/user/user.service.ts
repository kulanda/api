import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserStoreArgs, UserType } from "./dto";
import * as argon from "argon2";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class UserService {
  async getUser(
    prisma: PrismaClient,
    id: string
  ): Promise<Omit<UserType, "companies">> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async getUsers(prisma: PrismaClient, storeId: string) {
    return await prisma.user.findMany({
      where: {
        storeId,
      },
    });
  }
  async getUsersByStory(
    prisma: PrismaClient,
    storeId: string
  ): Promise<Omit<UserType, "companies">[]> {
    return await prisma.user.findMany({
      where: {
        storeId,
      },
    });
  }
}
