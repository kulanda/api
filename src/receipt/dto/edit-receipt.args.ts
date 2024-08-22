import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Receipt, Prisma } from "@prisma/client";
import { IsEnum, IsNumber, IsString, IsUUID } from "class-validator";
import { ReceiptEnumType } from "./receipt.type";

@ArgsType()
export class EditReceiptArgs
  implements Omit<Receipt, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Int)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => String)
  @IsString()
  digitalSignature: string;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => ReceiptEnumType)
  @IsEnum(["ISSUED", "REVERSED"])
  status: string;
}
