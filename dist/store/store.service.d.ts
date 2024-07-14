import { CreateStoreArgs, ReportStoreType, StoreType } from "./dto";
import { ReportStoreOptionsInput } from "./dto/report-store-options.input";
import { PrismaClient } from "@prisma/client";
export declare class StoreService {
    createStore(prisma: PrismaClient, companyId: string, dto: CreateStoreArgs): Promise<StoreType>;
    getStores(prisma: PrismaClient, companyId: string): Promise<StoreType[]>;
    getStore(prisma: PrismaClient, id: string): Promise<StoreType>;
    getStoreReport(prisma: PrismaClient, id: string, options?: ReportStoreOptionsInput): Promise<ReportStoreType>;
}
