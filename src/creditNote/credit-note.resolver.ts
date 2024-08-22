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

@Resolver(() => CreditNoteType)
export class CreditNoteResolver {
  constructor(
    private CreditNoteService: CreditNoteService,
    private invoiceService: InvoiceService
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
  @ResolveField(() => SaleType)
  async invoid(@Context("req") req, @Parent() creditNote: CreditNoteType) {
    return this.invoiceService.getInvoice(req.client, creditNote.invoiceId);
  }
}
