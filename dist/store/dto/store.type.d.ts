import { Store } from '@prisma/client';
export declare class StoreType implements Omit<Store, 'companyId'> {
    id: string;
    address: string;
    designation: string;
    phone: string;
    globalSale: boolean;
    createdAt: Date;
    updatedAt: Date;
}
