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
import {
  InvoiceType,
  CreateInvoiceArgs,
  EditInvoiceArgs,
  FilterInvoiceInput,
} from "./dto";
import { InvoiceService } from "./invoice.service";
import { SaleType } from "src/sale/dto";
import { SaleService } from "src/sale/sale.service";
import { ReceiptType } from "src/receipt/dto";
import { ReceiptService } from "src/receipt/receipt.service";
import { CreditNoteService } from "src/creditNote/credit-note.service";
import { DebitNoteService } from "src/debitNote/debit-note.service";
import { CreditNoteType } from "src/creditNote/dto";
import { DebitNoteType } from "src/debitNote/dto";

@Resolver(() => InvoiceType)
export class InvoiceResolver {
  constructor(
    private invoiceService: InvoiceService,
    private saleService: SaleService,
    private receiptService: ReceiptService,
    private creditNoteService: CreditNoteService,
    private debitNoteService: DebitNoteService
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
  async getInvoices(
    @Context("req") req,
    @Args("filter", { type: () => FilterInvoiceInput, nullable: true })
    filter: FilterInvoiceInput
  ) {
    return this.invoiceService.getInvoices(req.client, filter);
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
  async sale(@Context("req") req, @Parent() invoice: InvoiceType) {
    return this.saleService.getSale(req.client, invoice.saleId);
  }
  @ResolveField(() => [ReceiptType!]!, {
    nullable: true,
  })
  async receipt(@Context("req") req, @Parent() invoice: InvoiceType) {
    return this.receiptService.getReceiptBySaleId(req.client, invoice.saleId);
  }
  @ResolveField(() => [CreditNoteType!]!, {
    nullable: true,
  })
  async creditNote(@Context("req") req, @Parent() invoice: InvoiceType) {
    return this.creditNoteService.getCreditNoteBySaleId(
      req.client,
      invoice.saleId
    );
  }
  @ResolveField(() => [DebitNoteType!]!, {
    nullable: true,
  })
  async debitNote(@Context("req") req, @Parent() invoice: InvoiceType) {
    return this.debitNoteService.getDebitNoteBySaleId(req.client, invoice.saleId);
  }
}
