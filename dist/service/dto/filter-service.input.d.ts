import { Service } from '@prisma/client';
export declare class FilterServicePaginateInput {
    page: number;
    limit: number;
}
export declare class FilterServiceInput implements Pick<Service, 'name' | 'categoryId'> {
    name: string;
    categoryId: string;
    paginate: FilterServicePaginateInput;
}
