import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { CreditNote, Prisma } from "@prisma/client";
import { IsEnum, IsNumber, IsUUID } from "class-validator";
import { CreditNoteEnumType } from "./credit-note.type";

@ArgsType()
export class EditCreditNoteArgs
  implements Omit<CreditNote, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Int, {
    nullable: true,
  })
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => String, {
    nullable: true,
  })
  @IsNumber()
  digitalSignature: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  invoiceId: string;

  @Field(() => CreditNoteEnumType, {
    nullable: true,
  })
  @IsEnum(["DRAFT", "ISSUED", "APPLIED", "CANCELLED"])
  status: string;
}
