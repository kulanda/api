import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Receipt } from "@prisma/client";
import { IsArray, IsEnum, IsNumber, IsString, IsUUID } from "class-validator";
import { ReceiptEnumType } from "./receipt.type";
import { ReceiptPaymentInput } from "./receipt-payment.input";

@ArgsType()
export class CreateReceiptArgs
  implements
    Omit<Receipt, "id" | "number" | "amount" | "createdAt" | "updatedAt">
{
  @Field(() => String)
  @IsString()
  digitalSignature: string;

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
