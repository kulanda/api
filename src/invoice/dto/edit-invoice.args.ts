import { ArgsType, Field, Float, ID, Int } from "@nestjs/graphql";
import { Invoice, Prisma } from "@prisma/client";
import { IsDate, IsEnum, IsNumber, IsString, IsUUID } from "class-validator";
import { InvoiceEnumType } from "./invoice.type";

@ArgsType()
export class EditInvoiceArgs
  implements
    Omit<
      Invoice,
      "id" | "number" | "digitalSignature" | "createdAt" | "updatedAt"
    >
{
  @IsUUID()
  id: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  amount: Prisma.Decimal;


  @Field(() => Number,{
    nullable: true
  })
  @IsNumber()
  change: Prisma.Decimal;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  saleId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  observation: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsString()
  retention: Prisma.Decimal;

  @Field(() => InvoiceEnumType)
  @IsEnum(["DRAFT", "ISSUED", "PAID", "OVERDUE", "CANCELLED"])
  status: string;

  @Field(() => Date)
  @IsDate()
  dueDate: Date;
}
