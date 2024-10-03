import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prisma, Service } from "@prisma/client";
import { IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

@ObjectType()
export class ServiceType implements Omit<Service, "image"> {
  @Field(() => ID)
  id: string;

  @Field(() => Number, {
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  code: number;

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
