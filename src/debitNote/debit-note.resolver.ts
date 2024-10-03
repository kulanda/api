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
import { DebitNoteType, CreateDebitNoteArgs, EditDebitNoteArgs } from "./dto";
import { DebitNoteService } from "./debit-note.service";
import { InvoiceService } from "src/invoice/invoice.service";
import { InvoiceType } from "src/invoice/dto";
import { OrderService } from "src/order/order.service";
import { OrderType } from "src/order/dto";

@Resolver(() => DebitNoteType)
export class DebitNoteResolver {
  constructor(
    private debitNoteService: DebitNoteService,
    private invoiceService: InvoiceService,
    private orderService: OrderService
  ) {}
  @Mutation(() => DebitNoteType)
  async createDebitNote(
    @Context("req") req,
    @Args() data: CreateDebitNoteArgs
  ) {
    return this.debitNoteService.createDebitNote(req.client, data);
  }
  @Mutation(() => DebitNoteType)
  async editDebitNote(@Context("req") req, @Args() data: EditDebitNoteArgs) {
    return this.debitNoteService.editDebitNote(req.client, data);
  }
  @Query(() => [DebitNoteType])
  async getDebitNotes(@Context("req") req) {
    return this.debitNoteService.getDebitNotes(req.client);
  }
  @Query(() => DebitNoteType, {
    nullable: true,
  })
  async getDebitNote(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.debitNoteService.getDebitNote(req.client, id);
  }
  @ResolveField(() => InvoiceType)
  async invoice(@Context("req") req, @Parent() debitNote: DebitNoteType) {
    return this.invoiceService.getInvoice(req.client, debitNote.invoiceId);
  }
  @ResolveField(() => [OrderType], {
    nullable: true,
  })
  async orders(@Context("req") req, @Parent() debitNote: DebitNoteType) {
    return this.orderService.getOrdersByDebitNoteId(req.client, debitNote.id);
  }
}
