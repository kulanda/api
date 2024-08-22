import { Field, InputType } from "@nestjs/graphql";
import { SupplierOnProduct } from "@prisma/client";
import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

@InputType()
export class FilterSupplierOnProductPaginateInput {
  @Field(() => Number, {
    nullable: true,
    defaultValue: 1,
  })
  @IsNumber()
  page: number;
  @Field(() => Number, {
    nullable: true,
    defaultValue: 30,
  })
  @IsNumber()
  limit: number;
}

@InputType()
export class FilterSupplierOnProductInput
  implements Pick<SupplierOnProduct, "productId" | "supplierId">
{
  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  productId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  supplierId: string;

  @Field(() => FilterSupplierOnProductPaginateInput, {
    nullable: true,
  })
  @IsOptional()
  paginate: FilterSupplierOnProductPaginateInput;
}
