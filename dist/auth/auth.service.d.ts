import { AuthTokenType, SignInArgs, SignUpArgs } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import { SignInWithPhoneArgs } from "./dto/sign-in-with-phone.args";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signUp(prisma: PrismaService, dto: SignUpArgs): Promise<AuthTokenType>;
    signIn(prisma: PrismaService, dto: SignInArgs): Promise<AuthTokenType>;
    signInWithPhone(prisma: PrismaService, dto: SignInWithPhoneArgs): Promise<AuthTokenType>;
    signToken(userId: string, email: string): Promise<{
        access_token: string;
    }>;
    validateToken(token: string): Promise<any>;
}
