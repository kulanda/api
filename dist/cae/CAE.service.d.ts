import { CAEType, CreateCAEArgs } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class CaeService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createCAE(dto: CreateCAEArgs): Promise<CAEType>;
    getCAEs(): Promise<CAEType[]>;
    getCAE(id: string): Promise<CAEType>;
}
