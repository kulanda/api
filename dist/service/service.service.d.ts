import { CreateServiceArgs, EditServiceArgs, ServiceType } from "./dto";
import { FilterServiceInput } from "./dto/filter-service.input";
import { PrismaClient } from "@prisma/client";
export declare class ServiceService {
    createService(prisma: PrismaClient, { categoryId, storeId, charges, ...dto }: CreateServiceArgs): Promise<ServiceType>;
    editService(prisma: PrismaClient, id: string, { charges, ...dto }: EditServiceArgs): Promise<ServiceType>;
    getServices(prisma: PrismaClient, storeId: string, filter?: FilterServiceInput): Promise<ServiceType[]>;
    getServicesByOrder(prisma: PrismaClient, orderId: string): Promise<ServiceType[]>;
    getService(prisma: PrismaClient, id: string): Promise<ServiceType>;
}
