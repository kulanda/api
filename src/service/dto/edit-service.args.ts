import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Prisma, Service } from '@prisma/client';
import { IsNumber, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator';

@ArgsType()
export class EditServiceArgs
  implements Omit<Service, 'id' | 'createdAt' | 'updatedAt'>
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
  @IsUrl()
  @IsOptional()
  image: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  price: Prisma.Decimal;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  categoryId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  storeId: string;
}
