import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Client } from "@prisma/client";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from "class-validator";
import { ClientEnumType } from "./create-client.args";

@ObjectType()
export class ClientType implements Client {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  fullName: string;

  @Field(() => String,{
    nullable: true
  })
  @IsString()
  @IsOptional()
  nif: string;

  @Field(() => String)
  @IsPhoneNumber()
  phone: string;

  @Field(() => String,{
    nullable: true
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => ClientEnumType,{
    nullable: true
  })
  @IsEnum(["INDIVIDUAL", "LEGAL"])
  type: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  caeId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  storeId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
