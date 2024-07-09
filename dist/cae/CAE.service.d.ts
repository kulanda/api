import { CAEType, CreateCAEArgs } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class CaeService {
    createCAE(prisma: PrismaService, dto: CreateCAEArgs): Promise<CAEType>;
    getCategories(prisma: PrismaService): Promise<CAEType[]>;
    getCAE(prisma: PrismaService, id: string): Promise<CAEType>;
}
