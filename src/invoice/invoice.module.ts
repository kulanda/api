import { Module } from "@nestjs/common";
import { InvoiceResolver } from "./invoice.resolver";
import { InvoiceService } from "./invoice.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "src/auth/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ServiceService } from "src/service/service.service";
import { SaleService } from "src/sale/sale.service";
import { ReceiptService } from "src/receipt/receipt.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [
    InvoiceResolver,
    InvoiceService,
    PrismaService,
    AuthService,
    ServiceService,
    SaleService,
    ReceiptService
  ],
})
export class InvoiceModule {}