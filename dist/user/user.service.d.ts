import { UserType } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class UserService {
    getUser(prisma: PrismaClient, id: string): Promise<Omit<UserType, "companies">>;
    getUsers(prisma: PrismaClient, storeId: string): Promise<{
        id: string;
        fullName: string;
        username: string;
        phone: string;
        email: string;
        hash: string;
        access: string;
        storeId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUsersByStory(prisma: PrismaClient, storeId: string): Promise<Omit<UserType, "companies">[]>;
}
