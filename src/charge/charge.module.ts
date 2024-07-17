import { Module } from "@nestjs/common";
import { ChargeResolver } from "./charge.resolver";
import { ChargeService } from "./charge.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "src/auth/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ProductService } from "src/product/product.service";
import { ServiceService } from "src/service/service.service";
import { CategoryService } from "src/category/category.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [
    ChargeResolver,
    ChargeService,
    PrismaService,
    AuthService,
    ProductService,
    ServiceService,
    CategoryService,
  ],
})
export class ChargeModule {}
