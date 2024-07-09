import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserStoreArgs, UserType } from './dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUserStore(userId: string, { password, ...dto }: CreateUserStoreArgs): Promise<Omit<UserType, 'companies'>>;
    getUser(id: string): Promise<Omit<UserType, 'companies'>>;
    getUsersByStory(storeId: string): Promise<Omit<UserType, 'companies'>[]>;
}
