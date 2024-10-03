import { Company } from "@prisma/client";
export declare class CreateCompanyArgs implements Omit<Company, "id" | "createdAt" | "updatedAt"> {
    tenantId: string;
    nif: string;
    name: string;
    address: string;
    fax: string;
    vatRegime: string;
    logo: any;
    caeId: string;
    saftExportDate: Date;
}
