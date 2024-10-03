import { User } from "@prisma/client";
export declare enum AccessEnumType {
    SELLER = "SELLER",
    OWNER = "OWNER",
    MANAGER = "MANAGER"
}
export declare class UserType implements Omit<User, "hash" | "companies"> {
    id: string;
    fullName: string;
    username: string;
    phone: string;
    email: string;
    access: string;
    storeId: string;
    createdAt: Date;
    updatedAt: Date;
}
