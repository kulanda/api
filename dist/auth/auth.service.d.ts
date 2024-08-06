import { AuthTokenType, SignInArgs, SignUpArgs } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
export declare class AuthService {
    private jwt;
    private config;
    constructor(jwt: JwtService, config: ConfigService);
    signUp(prisma: PrismaClient, dto: SignUpArgs): Promise<AuthTokenType>;
    signIn(prisma: PrismaClient, dto: SignInArgs): Promise<AuthTokenType>;
    signToken(prisma: PrismaClient, userId: string, email: string): Promise<{
        access_token: string;
    }>;
    validateToken(prisma: PrismaClient, token: string): Promise<{
        id: string;
        fullName: string;
        username: string;
        phone: string;
        email: string;
        hash: string;
        access: string;
        storeId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
