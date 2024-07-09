import { CreateStoreArgs, ReportStoreType, StoreType } from './dto';
import { StoreService } from './store.service';
import { ProductType } from 'src/product/dto';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';
import { UserType } from 'src/user/dto';
import { SaleType } from 'src/sale/dto';
import { SaleService } from 'src/sale/sale.service';
import { ReportStoreOptionsInput } from './dto/report-store-options.input';
export declare class StoreResolver {
    private storeService;
    private productService;
    private userService;
    private saleService;
    constructor(storeService: StoreService, productService: ProductService, userService: UserService, saleService: SaleService);
    createStore(userId: string, data: CreateStoreArgs): Promise<StoreType>;
    getStores(companyId: string): Promise<StoreType[]>;
    getStore(id: string): Promise<StoreType>;
    getStoreReport(id: string, options: ReportStoreOptionsInput): Promise<ReportStoreType>;
    products(store: StoreType): Promise<ProductType[]>;
    sellers(store: StoreType): Promise<Omit<UserType, "companies">[]>;
    sales(store: StoreType): Promise<Omit<SaleType, "order">[]>;
}
