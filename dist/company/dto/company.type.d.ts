import { Company } from "@prisma/client";
import { StoreType } from "src/store/dto";
export declare class CompanyType implements Omit<Company, "userId" | "Store"> {
    tenantId: string;
    id: string;
    nif: string;
    name: string;
    address: string;
    logo: string;
    caeId: string;
    stores?: StoreType[];
    saftExportDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
