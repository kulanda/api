import { UserType } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class UserService {
    getUser(prisma: PrismaClient, id: string): Promise<Omit<UserType, "companies">>;
    getUsersByStory(prisma: PrismaClient, storeId: string): Promise<Omit<UserType, "companies">[]>;
}
