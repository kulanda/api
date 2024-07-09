type AccessGroup = 'SELLER' | 'OWNER' | 'MANAGER';
export declare const GetUser: (...dataOrPipes: ("id" | "fullName" | "username" | "phone" | "email" | "access" | "storeId" | "createdAt" | "updatedAt" | {
    data?: string;
    access: AccessGroup[];
} | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
export {};
