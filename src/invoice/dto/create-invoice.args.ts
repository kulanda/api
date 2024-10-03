import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Invoice, Prisma } from "@prisma/client";
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { InvoiceEnumType } from "./invoice.type";
import { CreateOrderSaleInput, OrderType } from "src/order/dto";

@ArgsType()
export class CreateInvoiceArgs
  implements
    Omit<
      Invoice,
      "id" | "number" | "digitalSignature" | "createdAt" | "updatedAt"
    >
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
  saleId: string;

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

  @Field(() => InvoiceEnumType)
  @IsEnum(["DRAFT", "ISSUED", "PAID", "OVERDUE", "CANCELLED"])
  status: string;
}
