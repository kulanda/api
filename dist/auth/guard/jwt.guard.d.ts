import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { PrismaService } from "src/prisma/prisma.service";
export declare class GqlAuthGuard implements CanActivate {
    private readonly authService;
    private prismaService;
    constructor(authService: AuthService, prismaService: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
