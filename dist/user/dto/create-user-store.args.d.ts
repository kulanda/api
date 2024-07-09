import { UserType } from './user.type';
export declare class CreateUserStoreArgs implements Omit<UserType, 'id' | 'createdAt' | 'updatedAt' | 'companies' | 'access'> {
    fullName: string;
    username: string;
    email: string;
    phone: string;
    storeId: string;
    password: string;
}
