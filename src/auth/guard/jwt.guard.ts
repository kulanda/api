import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthService } from "../auth.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private prismaService: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const client = await this.prismaService.getClient(req);
    const authHeader = req.headers.authorization;
    if (!authHeader) return false;

    const token = authHeader.split(" ")[1];
    if (!token) return false;

    const user = await this.authService.validateToken(client, token);
    if (!user) return false;

    delete user.hash;

    req.user = user;
    return true;
  }
}
