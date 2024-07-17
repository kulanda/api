import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { CAE, Charge } from "@prisma/client";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { ChargeEnumType } from "./create-charge.args";
import { Decimal } from "@prisma/client/runtime/library";

@ObjectType()
export class ChargeType implements Charge {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  acronym: string;

  @Field(() => Number)
  @IsNumber()
  percentage: Decimal;

  @Field(() => ChargeEnumType)
  @IsEnum(["TAX", "FEE", "DISCOUNT"])
  type: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  categoryId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  serviceId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  productId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
