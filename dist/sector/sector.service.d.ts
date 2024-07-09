import { SectorType, CreateSectorArgs } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class SectorService {
    createSector(prisma: PrismaService, dto: CreateSectorArgs): Promise<SectorType>;
    getCategories(prisma: PrismaService): Promise<SectorType[]>;
    getSector(prisma: PrismaService, id: string): Promise<SectorType>;
}
