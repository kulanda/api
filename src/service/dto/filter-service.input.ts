import { Field, ID, InputType } from '@nestjs/graphql';
import { Service } from '@prisma/client';
import { IsNumber, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class FilterServicePaginateInput {
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
export class FilterServiceInput
  implements Pick<Service, 'name' | 'categoryId'>
{
  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  name: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  categoryId: string;

  @Field(() => FilterServicePaginateInput, {
    nullable: true,
  })
  @IsOptional()
  paginate: FilterServicePaginateInput;

  /*   @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  minPrice: number;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  maxPrice: number; */
}
