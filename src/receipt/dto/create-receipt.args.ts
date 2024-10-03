import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import {  Prisma, Receipt } from "@prisma/client";
import { IsArray, IsDate, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { ReceiptEnumType } from "./receipt.type";
import { ReceiptPaymentInput } from "./receipt-payment.input";

@ArgsType()
export class CreateReceiptArgs
  implements
    Omit<Receipt, "id" | "number" | "amount" | "createdAt" | "updatedAt">
{
  @Field(() => String,{
    nullable: true
  })
  @IsString()
  @IsOptional()
  digitalSignature: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  observation: string;

  @Field(() => Date)
  @IsDate()
  dueDate: Date;

  @Field(() => Number)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => Number,{
    nullable: true
  })
  @IsNumber()
  change: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => ReceiptEnumType, {
    defaultValue: "ISSUED",
  })
  @IsEnum(["ISSUED", "REVERSED"])
  status: string;

  @Field(() => [ReceiptPaymentInput])
  @IsArray()
  payments: ReceiptPaymentInput[];
}
