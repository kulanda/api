import { CreateSaleArgs, SaleType } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SaleService {
    private prisma;
    constructor(prisma: PrismaService);
    createSale(sellerId: string, { orders, bankCard, cash, change, totalPrice }: CreateSaleArgs): Promise<Omit<SaleType, 'order'>>;
    getSales(storeId: string): Promise<Omit<SaleType, 'order'>[]>;
    getSale(id: string): Promise<Omit<SaleType, 'order'>>;
}
