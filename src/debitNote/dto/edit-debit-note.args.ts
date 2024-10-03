import { ArgsType, Field, Float, ID, Int } from "@nestjs/graphql";
import { DebitNote, Prisma } from "@prisma/client";
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { DebitNoteEnumType } from "./debit-note.type";

@ArgsType()
export class EditDebitNoteArgs
  implements Omit<DebitNote, "id" | "number" | "createdAt" | "updatedAt">
{
  amount: Prisma.Decimal;
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Number,{
    nullable: true
  })
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

  @Field(() => DebitNoteEnumType, {
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
