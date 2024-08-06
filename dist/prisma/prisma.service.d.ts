import { OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
export declare class PrismaService extends PrismaClient implements OnModuleDestroy {
    private config;
    private clients;
    constructor(config: ConfigService);
    getClient(request?: any, intern?: boolean): Promise<PrismaClient>;
    private extractTenantFromRequest;
    onModuleDestroy(): Promise<void>;
}
