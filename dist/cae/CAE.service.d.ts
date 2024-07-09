import { CAEType, CreateCAEArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CaeService {
    private prisma;
    constructor(prisma: PrismaService);
    createCAE(dto: CreateCAEArgs): Promise<CAEType>;
    getCategories(): Promise<CAEType[]>;
    getCAE(id: string): Promise<CAEType>;
}
