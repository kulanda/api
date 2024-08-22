import { ArgsType, Field, ID } from "@nestjs/graphql";
import { SupplierOnProduct } from "@prisma/client";
import { IsNumber, IsUUID } from "class-validator";

@ArgsType()
export class CreateSupplierOnProductArgs
  implements Omit<SupplierOnProduct, "id" | "createdAt" | "updatedAt">
{
  @Field(() => ID)
  @IsUUID()
  supplierId: string;

  @Field(() => ID)
  @IsUUID()
  productId: string;

  @Field(() => Number)
  @IsNumber()
  quantity: number;
}
