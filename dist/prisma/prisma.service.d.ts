import { OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";
export declare class PrismaService extends PrismaClient implements OnModuleDestroy {
    private configService;
    private clients;
    constructor(configService: ConfigService);
    getClient(request: Request): Promise<PrismaClient>;
    private extractTenantIdFromRequest;
    onModuleDestroy(): Promise<void>;
}
