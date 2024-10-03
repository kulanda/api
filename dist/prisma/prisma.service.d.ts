import { OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";
export declare class PrismaService extends PrismaClient implements OnModuleDestroy {
    private config;
    private clients;
    constructor(config: ConfigService);
    getClient(request?: Request, intern?: boolean): Promise<PrismaClient>;
    logMessage(tenantId: string, message: string): void;
    private extractTenantFromRequest;
    onModuleDestroy(): Promise<void>;
}
