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
import { CreditNoteType, CreateCreditNoteArgs, EditCreditNoteArgs } from "./dto";
import { CreditNoteService } from "./credit-note.service";
import { SaleType } from "src/sale/dto";
import { InvoiceService } from "src/invoice/invoice.service";
import { InvoiceType } from "src/invoice/dto";
import { OrderService } from "src/order/order.service";
import { OrderType } from "src/order/dto";

@Resolver(() => CreditNoteType)
export class CreditNoteResolver {
  constructor(
    private CreditNoteService: CreditNoteService,
    private invoiceService: InvoiceService,
    private orderService: OrderService
  ) {}
  @Mutation(() => CreditNoteType)
  async createCreditNote(@Context("req") req, @Args() data: CreateCreditNoteArgs) {
    return this.CreditNoteService.createCreditNote(req.client, data);
  }
  @Mutation(() => CreditNoteType)
  async editCreditNote(@Context("req") req, @Args() data: EditCreditNoteArgs) {
    return this.CreditNoteService.editCreditNote(req.client, data);
  }
  @Query(() => [CreditNoteType])
  async getCreditNotes(@Context("req") req) {
    return this.CreditNoteService.getCreditNotes(req.client);
  }
  @Query(() => CreditNoteType, {
    nullable: true,
  })
  async getCreditNote(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.CreditNoteService.getCreditNote(req.client, id);
  }
  @ResolveField(() => InvoiceType)
  async invoice(@Context("req") req, @Parent() creditNote: CreditNoteType) {
    return this.invoiceService.getInvoice(req.client, creditNote.invoiceId);
  }
  @ResolveField(() => [OrderType], {
    nullable: true,
  })
  async orders(@Context("req") req, @Parent() creditNote: CreditNoteType) {
    return this.orderService.getOrdersByCreditNoteId(req.client, creditNote.id);
  }
}
