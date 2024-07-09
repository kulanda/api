import { $Enums, Category } from '@prisma/client';
export declare class CategoryType implements Category {
    id: string;
    name: string;
    description: string;
    type: $Enums.CategoryType;
    createdAt: Date;
    updatedAt: Date;
}
