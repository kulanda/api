import { Category } from "@prisma/client";
export declare class CategoryType implements Category {
    id: string;
    name: string;
    description: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
}
