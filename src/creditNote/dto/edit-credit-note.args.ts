import { ArgsType, Field, Float, ID, Int } from "@nestjs/graphql";
import { CreditNote, Prisma } from "@prisma/client";
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { CreditNoteEnumType } from "./credit-note.type";

@ArgsType()
export class EditCreditNoteArgs
  implements Omit<CreditNote, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => Number)
  @IsNumber()
  change: Prisma.Decimal;

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

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  observation: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  retention: Prisma.Decimal;

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  dueDate: Date;
}
