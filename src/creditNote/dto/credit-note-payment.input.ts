import { Field, ID, InputType, Int, registerEnumType } from "@nestjs/graphql";
import { IsEnum, IsNumber, IsString } from "class-validator";

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

@InputType()
export class CreditNotePaymentInput {
  @Field(() => CreditNotePaymentEnumType)
  @IsEnum([
    "CASH",
    "DEPOSIT",
    "BANK_TRANSFER",
    "CREDIT_CARD",
    "MULTICAIXA_EXPRESS",
  ])
  type: keyof typeof CreditNotePaymentEnumType;

  @Field(() => Int)
  @IsNumber()
  amount: number;
}
