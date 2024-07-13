import { CompanyType } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Request } from "express";
export declare class CompanyService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getCompany(req: Request): Promise<CompanyType>;
}
