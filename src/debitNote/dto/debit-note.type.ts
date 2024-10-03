import { Field, Float, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { DebitNote, Prisma } from "@prisma/client";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export enum DebitNoteEnumType {
  DRAFT = "DRAFT",
  ISSUED = "ISSUED",
  APPLIED = "APPLIED",
  CANCELLED = "CANCELLED",
}

registerEnumType(DebitNoteEnumType, {
  name: "DebitNoteEnumType",
});

@ObjectType()
export class DebitNoteType implements DebitNote {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Int)
  @IsNumber()
  number: number;

  @Field(() => Number)
  @IsNumber()
  change: Prisma.Decimal;

  @Field(() => Number)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => String)
  @IsNumber()
  digitalSignature: string;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => DebitNoteEnumType)
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
