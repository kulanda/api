import { CreateUserStoreArgs, UserType } from './dto';
import { CompanyType } from 'src/company/dto';
import { CompanyService } from 'src/company/company.service';
import { UserService } from './user.service';
export declare class UserResolver {
    private companyService;
    private userService;
    constructor(companyService: CompanyService, userService: UserService);
    createUserStore(userId: string, data: CreateUserStoreArgs): Promise<Omit<UserType, "companies">>;
    user(user: string): Promise<string>;
    getUser(id: string): Promise<Omit<UserType, "companies">>;
    companies(_: string, user: UserType): Promise<CompanyType[]>;
}
