import { CAEType, CreateCAEArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
export declare class CaeService {
    createCAE(prisma: PrismaClient, dto: CreateCAEArgs): Promise<CAEType>;
    getCategories(prisma: PrismaClient): Promise<CAEType[]>;
    getCAE(prisma: PrismaClient, id: string): Promise<CAEType>;
}
