import { Field, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Invoice, Prisma } from "@prisma/client";
import { IsEnum, IsNumber, IsUUID } from "class-validator";

export enum InvoiceEnumType {
  DRAFT = "DRAFT",
  ISSUED = "ISSUED",
  PAID = "PAID",
  OVERDUE = "OVERDUE",
  CANCELLED = "CANCELLED",
}

registerEnumType(InvoiceEnumType, {
  name: "InvoiceEnumType",
});

@ObjectType()
export class InvoiceType implements Invoice {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Int)
  @IsNumber()
  number: number;

  @Field(() => Int)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  saleId: string;

  @Field(() => String)
  @IsNumber()
  digitalSignature: string;

  @Field(() => InvoiceEnumType)
  @IsEnum(["DRAFT", "ISSUED", "PAID", "OVERDUE", "CANCELLED"])
  status: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
