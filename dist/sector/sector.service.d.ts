import { SectorType, CreateSectorArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class SectorService {
    createSector(prisma: PrismaClient, dto: CreateSectorArgs): Promise<SectorType>;
    getCategories(prisma: PrismaClient): Promise<SectorType[]>;
    getSector(prisma: PrismaClient, id: string): Promise<SectorType>;
}
