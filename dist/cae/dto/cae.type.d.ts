import { CAE } from '@prisma/client';
export declare class CAEType implements CAE {
    id: string;
    name: string;
    code: number;
    sectorId: string;
    createdAt: Date;
    updatedAt: Date;
}
