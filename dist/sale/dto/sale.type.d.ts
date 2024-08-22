import { Sale } from "@prisma/client";
export declare class SaleType implements Omit<Sale, "SaleId" | "order"> {
    id: string;
    sellerId: string;
    clientId: string;
    createdAt: Date;
    updatedAt: Date;
}
