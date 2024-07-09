import { CreateOrderArgs, OrderType } from './dto';
import { OrderService } from './order.service';
import { ProductService } from 'src/product/product.service';
import { ServiceService } from 'src/service/service.service';
import { ProductType } from 'src/product/dto';
import { ServiceType } from 'src/service/dto';
export declare class OrderResolver {
    private orderService;
    private productService;
    private serviceService;
    constructor(orderService: OrderService, productService: ProductService, serviceService: ServiceService);
    createOrder(data: CreateOrderArgs): Promise<OrderType>;
    getOrders(saleId: string): Promise<OrderType[]>;
    getOrder(id: string): Promise<OrderType>;
    products(order: OrderType): Promise<ProductType[]>;
    services(order: OrderType): Promise<ServiceType[]>;
}
