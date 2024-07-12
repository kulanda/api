import { OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";
export declare class PrismaService implements OnModuleDestroy {
    private configService;
    private clients;
    constructor(configService: ConfigService);
    getClient(request?: Request, intern?: boolean): Promise<PrismaClient>;
    private extractTenantFromRequest;
    onModuleDestroy(): Promise<void>;
}
