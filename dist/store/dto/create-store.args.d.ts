import { Store } from "@prisma/client";
export declare enum StoreSaleEnumType {
    DEFAULT = "DEFAULT",
    PRODUCT = "PRODUCT",
    SERVICE = "SERVICE"
}
export declare class CreateStoreArgs implements Omit<Store, "id" | "createdAt" | "updatedAt" | "companyId"> {
    address: string;
    designation: string;
    phone: string;
    globalSale: boolean;
    saleType: string;
}
