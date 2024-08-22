import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Prisma, Service } from '@prisma/client';
import { IsArray, IsMultibyte, IsNumber, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator';
import { GraphQLUpload } from 'graphql-upload-ts';

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

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  price: Prisma.Decimal;

  @Field(() => GraphQLUpload,{
    nullable: true
  })
  @IsMultibyte()
  image: any;

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
