import { ArgsType, Field, ID, Int } from '@nestjs/graphql';
import { Prisma, Product } from '@prisma/client';
import {
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
} from 'class-validator';

@ArgsType()
export class EditProductArgs
  implements Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
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

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  image: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  price: Prisma.Decimal;

  @Field(() => Int, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  stock: number;

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
    defaultValue: []
  })
  @IsArray()
  @IsOptional()
  charges: string[];

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  storeId: string;
}
