import { CreateSaleArgs, SaleType } from './dto';
import { SaleService } from './sale.service';
import { UserService } from 'src/user/user.service';
import { OrderService } from 'src/order/order.service';
import { UserType } from 'src/user/dto';
import { OrderType } from 'src/order/dto';
export declare class SaleResolver {
    private saleService;
    private orderService;
    private sellerService;
    constructor(saleService: SaleService, orderService: OrderService, sellerService: UserService);
    createSale(sellerId: string, data: CreateSaleArgs): Promise<Omit<SaleType, "order">>;
    getSales(storeId: string): Promise<Omit<SaleType, "order">[]>;
    getSale(id: string): Promise<Omit<SaleType, "order">>;
    orders(sale: SaleType): Promise<OrderType[]>;
    seller(sale: SaleType): Promise<Omit<UserType, "companies">>;
}
