import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoreArgs, ReportStoreType, StoreType } from './dto';
import { ReportStoreOptionsInput } from './dto/report-store-options.input';
export declare class StoreService {
    private prisma;
    constructor(prisma: PrismaService);
    createStore(userId: string, dto: CreateStoreArgs): Promise<StoreType>;
    getStores(companyId: string): Promise<StoreType[]>;
    getStore(id: string): Promise<StoreType>;
    getStoreReport(id: string, options?: ReportStoreOptionsInput): Promise<ReportStoreType>;
}
