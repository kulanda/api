import { UserType } from "./dto";
import { CompanyService } from "src/company/company.service";
import { UserService } from "./user.service";
export declare class UserResolver {
    private companyService;
    private userService;
    constructor(companyService: CompanyService, userService: UserService);
    user(req: any, user: any): Promise<Omit<UserType, "companies">>;
    getUser(req: any, id: string): Promise<Omit<UserType, "companies">>;
}
