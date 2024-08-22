import { Field, InputType } from "@nestjs/graphql";
import { Supplier } from "@prisma/client";
import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

@InputType()
export class FilterSupplierPaginateInput {
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
export class FilterSupplierInput
  implements Pick<Supplier, "fullName" | "email" | "phone" | 'storeId'>
{
  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  storeId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  fullName: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  email: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  phone: string;

  @Field(() => FilterSupplierPaginateInput, {
    nullable: true,
  })
  @IsOptional()
  paginate: FilterSupplierPaginateInput;
}
