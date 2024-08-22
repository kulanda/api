import { Field, ID, ObjectType } from "@nestjs/graphql";
import { SupplierOnProduct } from "@prisma/client";
import {
  IsNumber,
  IsUUID,
} from "class-validator";

@ObjectType()
export class SupplierOnProductType implements SupplierOnProduct {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  @IsUUID()
  supplierId: string;

  @Field(() => ID)
  @IsUUID()
  productId: string;

  @Field(() => Number)
  @IsNumber()
  quantity: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
