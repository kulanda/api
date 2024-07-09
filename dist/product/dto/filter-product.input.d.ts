import { Product } from '@prisma/client';
export declare class FilterProductPaginateInput {
    page: number;
    limit: number;
}
export declare class FilterProductInput implements Pick<Product, 'name' | 'categoryId'> {
    name: string;
    categoryId: string;
    paginate: FilterProductPaginateInput;
}
