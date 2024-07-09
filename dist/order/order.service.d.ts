import { CreateOrderArgs, OrderType } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    createOrder({ ...dto }: CreateOrderArgs): Promise<OrderType>;
    getOrders(saleId: string): Promise<OrderType[]>;
    getOrder(id: string): Promise<OrderType>;
}
