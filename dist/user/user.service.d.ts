import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserStoreArgs, UserType } from "./dto";
export declare class UserService {
    createUserStore(prisma: PrismaService, userId: string, { password, ...dto }: CreateUserStoreArgs): Promise<Omit<UserType, "companies">>;
    getUser(prisma: PrismaService, id: string): Promise<Omit<UserType, "companies">>;
    getUsersByStory(prisma: PrismaService, storeId: string): Promise<Omit<UserType, "companies">[]>;
}
