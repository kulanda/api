import { CreateUserStoreArgs, UserType } from "./dto";
import { CompanyType } from "src/company/dto";
import { CompanyService } from "src/company/company.service";
import { UserService } from "./user.service";
export declare class UserResolver {
    private companyService;
    private userService;
    constructor(companyService: CompanyService, userService: UserService);
    createUserStore(req: any, userId: string, data: CreateUserStoreArgs): Promise<Omit<UserType, "companies">>;
    user(req: any, user: any): Promise<Omit<UserType, "companies">>;
    getUser(req: any, id: string): Promise<Omit<UserType, "companies">>;
    companies(req: any, _: string, user: UserType): Promise<CompanyType[]>;
}
