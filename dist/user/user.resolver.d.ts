import { UserType } from "./dto";
import { UserService } from "./user.service";
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    user(req: any, user: any): Promise<Omit<UserType, "companies">>;
    getUser(req: any, id: string): Promise<Omit<UserType, "companies">>;
    getUsers(req: any, storeId: string): Promise<{
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
}
