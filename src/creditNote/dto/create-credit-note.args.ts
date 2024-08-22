import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { CreditNote, Prisma } from "@prisma/client";
import { IsEnum, IsNumber, IsUUID } from "class-validator";
import { CreditNoteEnumType } from "./credit-note.type";

@ArgsType()
export class CreateCreditNoteArgs
  implements Omit<CreditNote, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => Int)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => String)
  @IsNumber()
  digitalSignature: string;

  @Field(() => CreditNoteEnumType)
  @IsEnum(["DRAFT", "ISSUED", "APPLIED", "CANCELLED"])
  status: string;
}
