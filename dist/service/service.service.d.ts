import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceArgs, EditServiceArgs, ServiceType } from './dto';
import { FilterServiceInput } from './dto/filter-service.input';
export declare class ServiceService {
    private prisma;
    constructor(prisma: PrismaService);
    createService({ categoryId, storeId, ...dto }: CreateServiceArgs): Promise<ServiceType>;
    editService(id: string, dto: EditServiceArgs): Promise<ServiceType>;
    getServices(storeId: string, filter?: FilterServiceInput): Promise<ServiceType[]>;
    getServicesByOrder(orderId: string): Promise<ServiceType[]>;
    getService(id: string): Promise<ServiceType>;
}
