import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prisma, Sale } from "@prisma/client";
import { IsNumber, IsOptional, IsUUID } from "class-validator";

@ObjectType()
export class SaleType implements Omit<Sale, "SaleId" | "order"> {
  @Field(() => ID)
  id: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  change: Prisma.Decimal;

  @Field(() => Number)
  @IsNumber()
  code: number;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  cash: Prisma.Decimal;
  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  bankCard: Prisma.Decimal;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  totalPrice: Prisma.Decimal;

  @Field(() => ID)
  @IsUUID()
  sellerId: string;

  @Field(() => ID)
  @IsUUID()
  clientId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
