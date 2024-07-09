import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyType, CreateCompanyArgs } from './dto';
export declare class CompanyService {
    createCompany(prisma: PrismaService, userId: string, { caeId, ...dto }: CreateCompanyArgs): Promise<CompanyType>;
    getCompanies(prisma: PrismaService, userId: string): Promise<CompanyType[]>;
    getCompany(prisma: PrismaService, id: string): Promise<CompanyType>;
}
