import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class ProductSupplierInput {
  @Field(() => ID)
  @IsString()
  supplierId: string;

  @Field(() => Int)
  @IsNumber()
  quantity: number;
}
