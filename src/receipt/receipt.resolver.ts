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
import { ReceiptType, CreateReceiptArgs, EditReceiptArgs } from "./dto";
import { ReceiptService } from "./receipt.service";
import { InvoiceService } from "src/invoice/invoice.service";
import { InvoiceType } from "src/invoice/dto";

@Resolver(() => ReceiptType)
export class ReceiptResolver {
  constructor(
    private receiptService: ReceiptService,
    private invoiceService: InvoiceService
  ) {}
  @Mutation(() => ReceiptType)
  async createReceipt(@Context("req") req, @Args() data: CreateReceiptArgs) {
    return this.receiptService.createReceipt(req.client, data);
  }
  @Mutation(() => ReceiptType)
  async editReceipt(@Context("req") req, @Args() data: EditReceiptArgs) {
    return this.receiptService.editReceipt(req.client, data);
  }
  @Query(() => [ReceiptType])
  async getReceipts(@Context("req") req) {
    return this.receiptService.getReceipts(req.client);
  }
  @Query(() => ReceiptType, {
    nullable: true,
  })
  async getReceipt(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.receiptService.getReceipt(req.client, id);
  }
  @ResolveField(() => InvoiceType)
  async invoice(@Context("req") req, @Parent() receipt: ReceiptType) {
    return this.invoiceService.getInvoice(req.client, receipt.invoiceId);
  }
}
