import { Sector } from '@prisma/client';
export declare class CreateCategoryArgs implements Omit<Sector, 'id' | 'createdAt' | 'updatedAt'> {
    name: string;
}
