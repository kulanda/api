import { CompanyType } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class CompanyService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getCompany(tenantId: string): Promise<CompanyType>;
}
