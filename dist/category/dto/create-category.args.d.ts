import { Category } from '@prisma/client';
export declare enum CategoryEnumType {
    PRODUCT = "PRODUCT",
    SERVICE = "SERVICE"
}
export declare class CreateCategoryArgs implements Omit<Category, 'id' | 'createdAt' | 'updatedAt'> {
    name: string;
    description: string;
    type: keyof typeof CategoryEnumType;
}
