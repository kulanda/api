import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Prisma, Product } from "@prisma/client";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsMultibyte,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
} from "class-validator";
import { ProductSupplierInput } from "./product-supplier.input";
import { GraphQLUpload } from "graphql-upload-ts";

@ArgsType()
export class CreateProductArgs
  implements Omit<Product, "id" | "createdAt" | "updatedAt"| 'image'>
{
  @Field(() => String)
  @IsOptional()
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsString()
  description: string;

  @Field(() => Number)
  @IsNumber()
  price: Prisma.Decimal;

  @Field(() => Int,{
    nullable: true
  })
  @IsNumber()
  @IsOptional()
  code: number;

  @Field(()=>Boolean)
  @IsBoolean()
  withholding: boolean;

  @Field(() => ID)
  @IsUUID()
  categoryId: string;

  @Field(() => [ID!]!, {
    nullable: true,
    defaultValue: [],
  })
  @IsArray()
  @IsOptional()
  charges: string[];

  @Field(() => [ProductSupplierInput!]!, {
    nullable: true,
    defaultValue: [],
  })
  @IsArray()
  @IsOptional()
  suppliers: ProductSupplierInput[];

  @Field(() => ID)
  @IsUUID()
  storeId: string;
}
