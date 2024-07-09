import { CAE } from '@prisma/client';
export declare class CreateCAEArgs implements Omit<CAE, 'id' | 'createdAt' | 'updatedAt'> {
    name: string;
    code: number;
    sectorId: string;
}
