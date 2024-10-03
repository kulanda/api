import { Field, Float, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { CreditNote, Prisma } from "@prisma/client";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

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

  @Field(() => Number)
  @IsNumber()
  change: Prisma.Decimal;

  @Field(() => Int)
  @IsNumber()
  number: number;

  @Field(() => Number)
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

  @Field(() => Date)
  @IsDate()
  dueDate: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
