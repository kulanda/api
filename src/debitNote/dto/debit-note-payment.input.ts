import { Field, InputType, Int, registerEnumType } from "@nestjs/graphql";
import { IsEnum, IsNumber } from "class-validator";

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

@InputType()
export class DebitNotePaymentInput {
  @Field(() => DebitNotePaymentEnumType)
  @IsEnum([
    "CASH",
    "DEPOSIT",
    "BANK_TRANSFER",
    "Debit_CARD",
    "MULTICAIXA_EXPRESS",
  ])
  type: keyof typeof DebitNotePaymentEnumType;

  @Field(() => Int)
  @IsNumber()
  amount: number;
}
