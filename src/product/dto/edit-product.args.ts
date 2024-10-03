import { ArgsType, Field, ID, Int } from "@nestjs/graphql";
import { Prisma, Product } from "@prisma/client";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsMultibyte,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
} from "class-validator";
import { ProductSupplierInput } from "./product-supplier.input";
import { GraphQLUpload } from "graphql-upload-ts";

@ArgsType()
export class EditProductArgs
  implements Omit<Product, "id" | "createdAt" | "updatedAt">
{
  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  description: string;

  @Field(() => GraphQLUpload,{
    nullable: true
  })
  @IsMultibyte()
  image: any;
  
  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
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

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  expiresOn: Date;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
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

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  storeId: string;
}
