import { Field, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Receipt, Prisma } from "@prisma/client";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export enum ReceiptEnumType {
  ISSUED = "ISSUED",
  PAID = "REVERSED",
}

registerEnumType(ReceiptEnumType, {
  name: "ReceiptEnumType",
});

@ObjectType()
export class ReceiptType implements Receipt {
  @Field(() => ID)
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

  @Field(() => Int)
  @IsNumber()
  number: number;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  observation: string;

  @Field(() => Date)
  @IsDate()
  dueDate: Date;

  @Field(() => String)
  @IsString()
  digitalSignature: string;

  @Field(() => ID)
  @IsUUID()
  invoiceId: string;

  @Field(() => ReceiptEnumType)
  @IsEnum(["ISSUED", "REVERSED"])
  status: string

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
