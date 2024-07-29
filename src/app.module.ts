import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { CompanyModule } from "./company/company.module";
import { StoreModule } from "./store/store.module";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { ServiceModule } from "./service/service.module";
import { SaleModule } from "./sale/sale.module";
import { OrderModule } from "./order/order.module";
import { SectorModule } from "./sector/sector.module";
import { CaeModule } from "./cae/cae.module";
import { TenantMiddleware } from "./tenant.middleware";
import { TenantModule } from "./tenant/tenant.module";
import { ChargeModule } from "./charge/charge.module";
import { ClientModule } from "./client/client.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      context: ({ req }) => ({ req }),
      csrfPrevention: false,
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
    TenantModule,
    ChargeModule,
    ClientModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
