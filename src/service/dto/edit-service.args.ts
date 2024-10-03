import { ArgsType, Field, ID } from "@nestjs/graphql";
import { Prisma, Service } from "@prisma/client";
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

@ArgsType()
export class EditServiceArgs
  implements Omit<Service, "id" | "createdAt" | "updatedAt" | "image">
{
  @Field(() => Number, {
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  code: number;
  
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

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  categoryId: string;

  @Field(() => [ID!]!, {
    nullable: true,
    defaultValue: [],
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
