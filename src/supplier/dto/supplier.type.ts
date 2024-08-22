import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Supplier } from "@prisma/client";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from "class-validator";
import { SupplierEnumType } from "./create-supplier.args";

@ObjectType()
export class SupplierType implements Supplier {
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

  @Field(() => SupplierEnumType,{
    nullable: true
  })
  @IsEnum(["INDIVIDUAL", "LEGAL"])
  type: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  storeId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  caeId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
