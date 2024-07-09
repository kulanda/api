import { CreateServiceArgs, EditServiceArgs, ServiceType } from './dto';
import { ServiceService } from './service.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryType } from 'src/category/dto';
import { FilterServiceInput } from './dto/filter-service.input';
export declare class ServiceResolver {
    private serviceService;
    private categoryService;
    constructor(serviceService: ServiceService, categoryService: CategoryService);
    createService(_: string, data: CreateServiceArgs): Promise<ServiceType>;
    editService(_: string, id: string, data: EditServiceArgs): Promise<ServiceType>;
    getServices(storeId: string, filter: FilterServiceInput): Promise<ServiceType[]>;
    getService(id: string): Promise<ServiceType>;
    category(service: ServiceType): Promise<CategoryType>;
}
