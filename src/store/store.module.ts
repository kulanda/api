import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';
import { SaleService } from 'src/sale/sale.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    StoreService,
    StoreResolver,
    PrismaService,
    AuthService,
    ProductService,
    UserService,
    SaleService,
  ],
})
export class StoreModule {}
