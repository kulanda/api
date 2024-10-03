import {
  Field,
  Float,
  ID,
  Int,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import { Invoice, Prisma } from "@prisma/client";
import { IsDate, IsEnum, IsNumber, IsString, IsUUID } from "class-validator";

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

  @Field(() => Number,{
    nullable: true
  })
  @IsNumber()
  change: Prisma.Decimal;

  @Field(() => Number)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  saleId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  observation: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsString()
  retention: Prisma.Decimal;

  @Field(() => String)
  @IsNumber()
  digitalSignature: string;

  @Field(() => InvoiceEnumType)
  @IsEnum(["DRAFT", "ISSUED", "PAID", "OVERDUE", "CANCELLED"])
  status: string;

  @Field(() => Date)
  @IsDate()
  dueDate: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
