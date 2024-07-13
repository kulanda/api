import { CAEType, CreateCAEArgs } from "./dto";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
export declare class CaeService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createCAE(dto: CreateCAEArgs): Promise<CAEType>;
    getCategories(prisma: PrismaClient): Promise<CAEType[]>;
    getCAE(id: string): Promise<CAEType>;
}
