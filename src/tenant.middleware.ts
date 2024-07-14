// tenant.middleware.ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { PrismaService } from "./prisma/prisma.service";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const rootClient = await this.prisma.getClient(null, true);

    if (req.headers["x-tenant-username"] && req.headers["x-tenant-key"]) {
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

    req["client"] = await this.prisma.getClient(req);
    next();
  }
}
