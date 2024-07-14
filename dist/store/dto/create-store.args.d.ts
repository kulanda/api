import { Store } from "@prisma/client";
export declare class CreateStoreArgs implements Omit<Store, "id" | "createdAt" | "updatedAt" | "companyId"> {
    address: string;
    designation: string;
    phone: string;
}
