import { PrismaService } from "src/prisma/prisma.service";
import { CreateServiceArgs, EditServiceArgs, ServiceType } from "./dto";
import { FilterServiceInput } from "./dto/filter-service.input";
export declare class ServiceService {
    createService(prisma: PrismaService, { categoryId, storeId, ...dto }: CreateServiceArgs): Promise<ServiceType>;
    editService(prisma: PrismaService, id: string, dto: EditServiceArgs): Promise<ServiceType>;
    getServices(prisma: PrismaService, storeId: string, filter?: FilterServiceInput): Promise<ServiceType[]>;
    getServicesByOrder(prisma: PrismaService, orderId: string): Promise<ServiceType[]>;
    getService(prisma: PrismaService, id: string): Promise<ServiceType>;
}
