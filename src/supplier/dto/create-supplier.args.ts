import { ArgsType, Field, ID, registerEnumType } from "@nestjs/graphql";
import { Supplier } from "@prisma/client";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from "class-validator";

export enum SupplierEnumType {
  INDIVIDUAL = "INDIVIDUAL",
  LEGAL = "LEGAL",
}

registerEnumType(SupplierEnumType, {
  name: "SupplierEnumType",
});

@ArgsType()
export class CreateSupplierArgs
  implements Omit<Supplier, "id" | "createdAt" | "updatedAt">
{
  @Field(() => String)
  @IsString()
  fullName: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  nif: string;

  @Field(() => String)
  @IsPhoneNumber()
  phone: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => SupplierEnumType, {
    nullable: true,
    defaultValue: "INDIVIDUAL",
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
}
