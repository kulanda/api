import { Module } from "@nestjs/common";
import { CreditNoteResolver } from "./credit-note.resolver";
import { CreditNoteService } from "./credit-note.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "src/auth/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ServiceService } from "src/service/service.service";
import { SaleService } from "src/sale/sale.service";
import { InvoiceService } from "src/invoice/invoice.service";
import { OrderService } from "src/order/order.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [
    CreditNoteResolver,
    CreditNoteService,
    PrismaService,
    AuthService,
    ServiceService,
    SaleService,
    InvoiceService,
    OrderService
  ],
})
export class CreditNoteModule {}
