import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { StoreModule } from './store/store.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';
import { SaleModule } from './sale/sale.module';
import { OrderModule } from './order/order.module';
import { SectorModule } from './sector/sector.module';
import { CaeModule } from './cae/cae.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    CompanyModule,
    StoreModule,
    CategoryModule,
    ProductModule,
    ServiceModule,
    SaleModule,
    OrderModule,
    SectorModule,
    CaeModule,
  ],
})
export class AppModule {}
