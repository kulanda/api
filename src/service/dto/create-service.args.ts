import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Prisma, Service } from '@prisma/client';
import { IsArray, IsNumber, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator';

@ArgsType()
export class CreateServiceArgs
  implements Omit<Service, 'id' | 'createdAt' | 'updatedAt'>
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
  @IsUrl()
  @IsOptional()
  image: string;

  @Field(() => Number)
  @IsNumber()
  price: Prisma.Decimal;

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
