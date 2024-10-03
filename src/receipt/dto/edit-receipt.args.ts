import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Receipt, Prisma } from "@prisma/client";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { ReceiptEnumType } from "./receipt.type";

@ArgsType()
export class EditReceiptArgs
  implements Omit<Receipt, "id" | "number" | "createdAt" | "updatedAt">
{
  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  id: string;

  @Field(() => Number)
  @IsNumber()
  amount: Prisma.Decimal;

  @Field(() => Number,{
    nullable: true
  })
  @IsNumber()
  change: Prisma.Decimal;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  observation: string;

  @Field(() => Date)
  @IsDate()
  dueDate: Date;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  digitalSignature: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  invoiceId: string;

  @Field(() => ReceiptEnumType, {
    nullable: true,
  })
  @IsEnum(["ISSUED", "REVERSED"])
  status: string;
}
