import { Store } from '@prisma/client';
export declare class StoreType implements Omit<Store, 'companyId'> {
    id: string;
    address: string;
    designation: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}
