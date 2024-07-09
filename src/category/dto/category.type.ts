import { Field, ID, ObjectType } from '@nestjs/graphql';
import { $Enums, Category } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { CategoryEnumType } from './create-category.args';

@ObjectType()
export class CategoryType implements Category {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  description: string;

  @Field(() => CategoryEnumType)
  type: $Enums.CategoryType;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
