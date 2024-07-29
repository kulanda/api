import { CreateSaleArgs, SaleType } from "./dto";
import { SaleService } from "./sale.service";
import { UserService } from "src/user/user.service";
import { OrderService } from "src/order/order.service";
import { UserType } from "src/user/dto";
import { OrderType } from "src/order/dto";
import { ClientType } from "src/client/dto";
import { ClientService } from "src/client/client.service";
export declare class SaleResolver {
    private saleService;
    private orderService;
    private sellerService;
    private clientService;
    constructor(saleService: SaleService, orderService: OrderService, sellerService: UserService, clientService: ClientService);
    createSale(req: any, sellerId: string, data: CreateSaleArgs): Promise<Omit<SaleType, "order">>;
    getSales(req: any, storeId: string): Promise<Omit<SaleType, "order">[]>;
    getSale(req: any, id: string): Promise<Omit<SaleType, "order">>;
    orders(req: any, sale: SaleType): Promise<OrderType[]>;
    seller(req: any, sale: SaleType): Promise<Omit<UserType, "companies">>;
    client(req: any, sale: SaleType): Promise<ClientType>;
}
