import { Module } from "@nestjs/common";
import { DebitNoteResolver } from "./debit-note.resolver";
import { DebitNoteService } from "./debit-note.service";
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
    DebitNoteResolver,
    DebitNoteService,
    PrismaService,
    AuthService,
    ServiceService,
    SaleService,
    InvoiceService,
    OrderService
  ],
})
export class DebitNoteModule {}
