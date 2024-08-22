import { ArgsType, Field, ID } from "@nestjs/graphql";
import { Prisma, Service } from "@prisma/client";
import {
  IsArray,
  IsMultibyte,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
} from "class-validator";
import { GraphQLUpload } from "graphql-upload-ts";

@ArgsType()
export class CreateServiceArgs
  implements Omit<Service, "id" | "createdAt" | "updatedAt">
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

  @Field(() => Number)
  @IsNumber()
  price: Prisma.Decimal;

  @Field(() => GraphQLUpload, {
    nullable: true,
  })
  @IsMultibyte()
  image: any;

  @Field(() => ID)
  @IsUUID()
  categoryId: string;

  @Field(() => [ID!]!, {
    nullable: true,
    defaultValue: [],
  })
  @IsArray()
  @IsOptional()
  charges: string[];

  @Field(() => ID)
  @IsUUID()
  storeId: string;
}
