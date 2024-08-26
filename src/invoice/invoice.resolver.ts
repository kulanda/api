import {
  Args,
  Context,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { InvoiceType, CreateInvoiceArgs, EditInvoiceArgs } from "./dto";
import { InvoiceService } from "./invoice.service";
import { SaleType } from "src/sale/dto";
import { SaleService } from "src/sale/sale.service";
import { ReceiptType } from "src/receipt/dto";
import { ReceiptService } from "src/receipt/receipt.service";

@Resolver(() => InvoiceType)
export class InvoiceResolver {
  constructor(
    private invoiceService: InvoiceService,
    private saleService: SaleService,
    private receiptService: ReceiptService
  ) {}
  @Mutation(() => InvoiceType)
  async createInvoice(@Context("req") req, @Args() data: CreateInvoiceArgs) {
    return this.invoiceService.createInvoice(req.client, data);
  }
  @Mutation(() => InvoiceType)
  async editInvoice(@Context("req") req, @Args() data: EditInvoiceArgs) {
    return this.invoiceService.editInvoice(req.client, data);
  }
  @Query(() => [InvoiceType])
  async getInvoices(@Context("req") req) {
    return this.invoiceService.getInvoices(req.client);
  }
  @Query(() => InvoiceType, {
    nullable: true,
  })
  async getInvoice(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.invoiceService.getInvoice(req.client, id);
  }
  @ResolveField(() => SaleType, {
    nullable: true,
  })
  async sale(@Context("req") req, @Parent() sale: InvoiceType) {
    return this.saleService.getSale(req.client, sale.saleId);
  }
  @ResolveField(() => ReceiptType, {
    nullable: true,
  })
  async receipt(@Context("req") req, @Parent() sale: InvoiceType) {
    return this.receiptService.getReceiptBySaleId(req.client, sale.saleId);
  }
}