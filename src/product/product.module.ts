import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { CategoryService } from 'src/category/category.service';
import { ChargeService } from 'src/charge/charge.service';
import { SupplierOnProductService } from 'src/suppliersOnProduct/suppliers-on-product.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    ProductService,
    ProductResolver,
    PrismaService,
    AuthService,
    CategoryService,
    ChargeService,
    SupplierOnProductService
  ],
})
export class ProductModule {}
