import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from '../auth.service';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const authHeader = req.headers.authorization;
    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];
    if (!token) return false;

    const user = await this.authService.validateToken(token);
    if (!user) return false;

    delete user.hash;

    req.user = user;
    return true;
  }
}
