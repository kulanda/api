import { Company } from "@prisma/client";
import { StoreType } from "src/store/dto";
export declare enum VatRegimeEnumType {
    GENERAL_REGIME = "GENERAL_REGIME",
    EXCLUSION_REGIME = "EXCLUSION_REGIME",
    SIMPLIFIED_REGIME = "SIMPLIFIED_REGIME"
}
export declare class CompanyType implements Omit<Company, "userId" | "Store"> {
    tenantId: string;
    id: string;
    nif: string;
    name: string;
    address: string;
    fax: string;
    vatRegime: string;
    logo: string;
    caeId: string;
    stores?: StoreType[];
    saftExportDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
