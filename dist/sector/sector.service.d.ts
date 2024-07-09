import { SectorType, CreateSectorArgs } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SectorService {
    private prisma;
    constructor(prisma: PrismaService);
    createSector(dto: CreateSectorArgs): Promise<SectorType>;
    getCategories(): Promise<SectorType[]>;
    getSector(id: string): Promise<SectorType>;
}
