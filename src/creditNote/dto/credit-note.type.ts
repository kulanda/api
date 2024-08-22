import { Field, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { CreditNote, Prisma } from "@prisma/client";
import { IsEnum, IsNumber, IsUUID } from "class-validator";

export enum CreditNoteEnumType {
  DRAFT = "DRAFT",
  ISSUED = "ISSUED",
  APPLIED = "APPLIED",
  CANCELLED = "CANCELLED",
}

registerEnumType(CreditNoteEnumType, {
  name: "CreditNoteEnumType",
});

@ObjectType()
export class CreditNoteType implements CreditNote {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Int)
  @IsNumber()
  number: number;

  @Field(() => Int)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => String)
  @IsNumber()
  digitalSignature: string;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => CreditNoteEnumType)
  @IsEnum(["DRAFT", "ISSUED", "APPLIED", "CANCELLED"])
  status: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
