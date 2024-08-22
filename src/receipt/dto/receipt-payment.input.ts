import { Field, ID, InputType, Int, registerEnumType } from "@nestjs/graphql";
import { IsEnum, IsNumber, IsString } from "class-validator";

export enum ReceiptPaymentEnumType {
  CASH = "CASH",
  DEPOSIT = "DEPOSIT",
  BANK_TRANSFER = "BANK_TRANSFER",
  CREDIT_CARD = "CREDIT_CARD",
  MULTICAIXA_EXPRESS = "MULTICAIXA_EXPRESS",
}

registerEnumType(ReceiptPaymentEnumType, {
  name: "ReceiptPaymentEnumType",
});

@InputType()
export class ReceiptPaymentInput {
  @Field(() => ReceiptPaymentEnumType)
  @IsEnum([
    "CASH",
    "DEPOSIT",
    "BANK_TRANSFER",
    "CREDIT_CARD",
    "MULTICAIXA_EXPRESS",
  ])
  type: keyof typeof ReceiptPaymentEnumType;

  @Field(() => Int)
  @IsNumber()
  amount: number;
}
