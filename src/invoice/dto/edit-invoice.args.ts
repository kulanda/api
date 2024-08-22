import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Invoice, Prisma } from "@prisma/client";
import { IsEnum, IsNumber, IsUUID } from "class-validator";
import { InvoiceEnumType } from "./invoice.type";

@ArgsType()
export class EditInvoiceArgs
  implements
    Omit<
      Invoice,
      "id" | "number" | "digitalSignature" | "createdAt" | "updatedAt"
    >
{
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Int, {
    nullable: true,
  })
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  saleId: string;

  @Field(() => InvoiceEnumType)
  @IsEnum(["DRAFT", "ISSUED", "PAID", "OVERDUE", "CANCELLED"])
  status: string;
}
