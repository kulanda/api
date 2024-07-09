import { ArgsType, Field, registerEnumType } from '@nestjs/graphql';
import { $Enums, Category } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum CategoryEnumType {
  PRODUCT = 'PRODUCT',
  SERVICE = 'SERVICE',
}

registerEnumType(CategoryEnumType, {
  name: 'CategoryEnumType',
});

@ArgsType()
export class CreateCategoryArgs
  implements Omit<Category, 'id' | 'createdAt' | 'updatedAt'>
{
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
  @IsEnum(['PRODUCT', 'SERVICE'])
  type: $Enums.CategoryType;
}
