import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserStoreArgs, UserType } from './dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUserStore(
    userId: string,
    { password, ...dto }: CreateUserStoreArgs,
  ): Promise<Omit<UserType, 'companies'>> {
    const hash = await argon.hash(password);

    const store = await this.prisma.store.findUnique({
      where: {
        id: dto.storeId,
        AND: {
          company: {
            AND: {
              userId,
            },
          },
        },
      },
    });

    if (!store.id) throw new NotFoundException();

    return await this.prisma.user.create({
      data: {
        ...dto,
        hash,
        access: 'SELLER',
      },
    });
  }
  async getUser(id: string): Promise<Omit<UserType, 'companies'>> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async getUsersByStory(
    storeId: string,
  ): Promise<Omit<UserType, 'companies'>[]> {
    return await this.prisma.user.findMany({
      where: {
        storeId,
      },
    });
  }
}
