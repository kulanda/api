import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { SupplierOnProductService } from "./suppliers-on-product.service";
import { SupplierOnProductResolver } from "./suppliers-on-product.resolver";
import { ProductService } from "src/product/product.service";
import { SupplierService } from "src/supplier/supplier.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [
    SupplierOnProductResolver,
    SupplierOnProductService,
    AuthService,
    PrismaService,
    ProductService,
    SupplierService,
  ],
})
export class SupplierOnProductModule {}
