import { Module } from "@nestjs/common";
import { ReceiptResolver } from "./receipt.resolver";
import { ReceiptService } from "./receipt.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "src/auth/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ServiceService } from "src/service/service.service";
import { SaleService } from "src/sale/sale.service";
import { InvoiceService } from "src/invoice/invoice.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [
    ReceiptResolver,
    ReceiptService,
    PrismaService,
    AuthService,
    ServiceService,
    SaleService,
    InvoiceService,
  ],
})
export class ReceiptModule {}
