// tenant.middleware.ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { PrismaService } from "./prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) {}
  async use(req: Request, _: Response, next: NextFunction) {
    const rootClient = await this.prisma.getClient(null, true);

    if (req?.headers?.["x-tenant-username"] && req?.headers?.["x-tenant-key"]) {
      const company = await rootClient.company.findFirst({
        where: {
          tenant: {
            username: req.headers["x-tenant-username"] as string,
          },
        },
      });

      if (company?.id) {
        req["companyId"] = company?.id;
        req["tenantId"] = company?.tenantId;
      }
    }
    const client = await this.prisma.getClient(req);

    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];

      const user = await this.authService.validateToken(client, token);

      req["userId"] = user?.id;
    }

    req["client"] = client;
    next();
  }
}
