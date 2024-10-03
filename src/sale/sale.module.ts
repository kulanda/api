import { Module } from "@nestjs/common";
import { SaleService } from "./sale.service";
import { SaleResolver } from "./sale.resolver";
import { JwtModule } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/user/user.service";
import { OrderService } from "src/order/order.service";
import { ClientService } from "src/client/client.service";
import { InvoiceService } from "src/invoice/invoice.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [
    SaleService,
    SaleResolver,
    PrismaService,
    AuthService,
    UserService,
    OrderService,
    ClientService,
    InvoiceService
  ],
})
export class SaleModule {}
