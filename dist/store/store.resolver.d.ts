import { CreateStoreArgs, ReportStoreType, StoreType } from "./dto";
import { StoreService } from "./store.service";
import { ProductType } from "src/product/dto";
import { ProductService } from "src/product/product.service";
import { UserService } from "src/user/user.service";
import { UserType } from "src/user/dto";
import { SaleType } from "src/sale/dto";
import { SaleService } from "src/sale/sale.service";
import { ReportStoreOptionsInput } from "./dto/report-store-options.input";
export declare class StoreResolver {
    private storeService;
    private productService;
    private userService;
    private saleService;
    constructor(storeService: StoreService, productService: ProductService, userService: UserService, saleService: SaleService);
    createStore(req: any, data: CreateStoreArgs): Promise<StoreType>;
    getStores(req: any): Promise<StoreType[]>;
    getStore(req: any, id: string): Promise<StoreType>;
    getStoreReport(req: any, id: string, options: ReportStoreOptionsInput): Promise<ReportStoreType>;
    products(req: any, store: StoreType): Promise<ProductType[]>;
    sellers(req: any, store: StoreType): Promise<Omit<UserType, "companies">[]>;
    sales(req: any, store: StoreType): Promise<Omit<SaleType, "order">[]>;
}
