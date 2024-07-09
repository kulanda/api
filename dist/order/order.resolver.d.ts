import { CreateOrderArgs, OrderType } from "./dto";
import { OrderService } from "./order.service";
import { ProductService } from "src/product/product.service";
import { ServiceService } from "src/service/service.service";
import { ProductType } from "src/product/dto";
import { ServiceType } from "src/service/dto";
export declare class OrderResolver {
    private orderService;
    private productService;
    private serviceService;
    constructor(orderService: OrderService, productService: ProductService, serviceService: ServiceService);
    createOrder(req: any, data: CreateOrderArgs): Promise<OrderType>;
    getOrders(req: any, saleId: string): Promise<OrderType[]>;
    getOrder(req: any, id: string): Promise<OrderType>;
    products(req: any, order: OrderType): Promise<ProductType[]>;
    services(req: any, order: OrderType): Promise<ServiceType[]>;
}
