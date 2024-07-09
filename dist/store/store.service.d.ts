import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoreArgs, ReportStoreType, StoreType } from './dto';
import { ReportStoreOptionsInput } from './dto/report-store-options.input';
export declare class StoreService {
    createStore(prisma: PrismaService, userId: string, dto: CreateStoreArgs): Promise<StoreType>;
    getStores(prisma: PrismaService, companyId: string): Promise<StoreType[]>;
    getStore(prisma: PrismaService, id: string): Promise<StoreType>;
    getStoreReport(prisma: PrismaService, id: string, options?: ReportStoreOptionsInput): Promise<ReportStoreType>;
}
