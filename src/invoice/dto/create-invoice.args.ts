import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Invoice, Prisma } from "@prisma/client";
import { IsEnum, IsNumber, IsString, IsUUID } from "class-validator";
import { InvoiceEnumType } from "./invoice.type";

@ArgsType()
export class CreateInvoiceArgs
  implements Omit<Invoice, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => Int)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  saleId: string;

  @Field(() => String)
  @IsString()
  digitalSignature: string;

  @Field(() => InvoiceEnumType)
  @IsEnum(["DRAFT", "ISSUED", "PAID", "OVERDUE", "CANCELLED"])
  status: string;
}
