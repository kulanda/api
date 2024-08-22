import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prisma, Product } from '@prisma/client';
import { IsDate, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

@ObjectType()
export class ProductType implements Product {
  @Field(() => ID)
  id: string;

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
  @IsUrl()
  @IsOptional()
  image: string;

  @Field(() => Number)
  @IsNumber()
  price: Prisma.Decimal;

  @Field(() => Date)
  @IsDate()
  expiresOn: Date;

  @Field(() => ID)
  @IsString()
  categoryId: string;

  @Field(() => ID)
  @IsString()
  storeId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
