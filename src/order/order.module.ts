import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { ProductService } from 'src/product/product.service';
import { ServiceService } from 'src/service/service.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    OrderService,
    OrderResolver,
    PrismaService,
    AuthService,
    ProductService,
    ServiceService,
  ],
})
export class OrderModule {}
