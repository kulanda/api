import { CreateServiceArgs, EditServiceArgs, ServiceType } from "./dto";
import { ServiceService } from "./service.service";
import { CategoryService } from "src/category/category.service";
import { CategoryType } from "src/category/dto";
import { FilterServiceInput } from "./dto/filter-service.input";
import { ChargeType } from "src/charge/dto";
import { ChargeService } from "src/charge/charge.service";
export declare class ServiceResolver {
    private serviceService;
    private categoryService;
    private chargeService;
    constructor(serviceService: ServiceService, categoryService: CategoryService, chargeService: ChargeService);
    createService(req: any, _: string, data: CreateServiceArgs): Promise<ServiceType>;
    editService(req: any, _: string, id: string, data: EditServiceArgs): Promise<ServiceType>;
    getServices(req: any, storeId: string, filter: FilterServiceInput): Promise<ServiceType[]>;
    getService(req: any, id: string): Promise<ServiceType>;
    category(req: any, service: ServiceType): Promise<CategoryType>;
    charges(req: any, service: ServiceType): Promise<ChargeType[]>;
}
