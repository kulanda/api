import { Company } from "@prisma/client";
export declare class CreateCompanyArgs implements Omit<Company, "id" | "createdAt" | "updatedAt"> {
    tenantId: string;
    nif: string;
    name: string;
    address: string;
    logo: string;
    caeId: string;
}
