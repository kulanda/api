import {
  ArgsType,
  Field,
  Float,
  ID,
  Int,
  registerEnumType,
} from "@nestjs/graphql";
import { CreditNote, Prisma } from "@prisma/client";
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { CreditNoteEnumType } from "./credit-note.type";
import { CreditNotePaymentInput } from "./credit-note-payment.input";
import { CreateOrderSaleInput } from "src/order/dto";

export enum CreditNotePaymentEnumType {
  CASH = "CASH",
  DEPOSIT = "DEPOSIT",
  BANK_TRANSFER = "BANK_TRANSFER",
  CREDIT_CARD = "CREDIT_CARD",
  MULTICAIXA_EXPRESS = "MULTICAIXA_EXPRESS",
}

registerEnumType(CreditNotePaymentEnumType, {
  name: "CreditNotePaymentEnumType",
});

@ArgsType()
export class CreateCreditNoteArgs
  implements Omit<CreditNote, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => Number)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  change: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  digitalSignature: string;

  @Field(() => CreditNoteEnumType, {
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

  @Field(() => [CreditNotePaymentInput])
  @IsArray()
  payments: CreditNotePaymentInput[];

  @Field(() => [CreateOrderSaleInput])
  @IsOptional()
  @IsArray()
  orders: CreateOrderSaleInput[];
}
