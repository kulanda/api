import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyType, CreateCompanyArgs } from './dto';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    createCompany(userId: string, { caeId, ...dto }: CreateCompanyArgs): Promise<CompanyType>;
    getCompanies(userId: string): Promise<CompanyType[]>;
    getCompany(id: string): Promise<CompanyType>;
}
