import { Sector } from '@prisma/client';
export declare class CreateSectorArgs implements Omit<Sector, 'id' | 'createdAt' | 'updatedAt'> {
    name: string;
}
