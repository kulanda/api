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
export class CreateProductArgs
  implements Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
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

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  image: string;

  @Field(() => Number)
  @IsNumber()
  price: Prisma.Decimal;

  @Field(() => Int, {
    nullable: true,
  })
  @IsNumber()
  stock: number;

  @Field(() => Date)
  @IsDate()
  expiresOn: Date;

  @Field(() => ID)
  @IsUUID()
  categoryId: string;

  @Field(() => [ID!]!, {
    nullable: true,
    defaultValue: []
  })
  @IsArray()
  @IsOptional()
  charges: string[];

  @Field(() => ID)
  @IsUUID()
  storeId: string;
}
