import {
  ArgsType,
  Field,
  Float,
  ID,
  Int,
  registerEnumType,
} from "@nestjs/graphql";
import { DebitNote, Prisma } from "@prisma/client";
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { DebitNoteEnumType } from "./debit-note.type";
import { DebitNotePaymentInput } from "./debit-note-payment.input";
import { CreateOrderSaleInput, OrderType } from "src/order/dto";

export enum DebitNotePaymentEnumType {
  CASH = "CASH",
  DEPOSIT = "DEPOSIT",
  BANK_TRANSFER = "BANK_TRANSFER",
  DEBIT_CARD = "DEBIT_CARD",
  MULTICAIXA_EXPRESS = "MULTICAIXA_EXPRESS",
}

registerEnumType(DebitNotePaymentEnumType, {
  name: "DebitNotePaymentEnumType",
});

@ArgsType()
export class CreateDebitNoteArgs
  implements Omit<DebitNote, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => Number)
  @IsNumber()
  change: Prisma.Decimal;
  
  @Field(() => Number)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  digitalSignature: string;

  @Field(() => DebitNoteEnumType, {
    defaultValue: "ISSUED",
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

  @Field(() => Date)
  @IsDate()
  dueDate: Date;

  @Field(() => [DebitNotePaymentInput])
  @IsArray()
  payments: DebitNotePaymentInput[];

  @Field(() => [CreateOrderSaleInput])
  @IsOptional()
  @IsArray()
  orders: CreateOrderSaleInput[];
}
