import { ArgsType, Field, ID, registerEnumType } from "@nestjs/graphql";
import { Client } from "@prisma/client";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from "class-validator";

export enum ClientEnumType {
  INDIVIDUAL = "INDIVIDUAL",
  LEGAL = "LEGAL",
}

registerEnumType(ClientEnumType, {
  name: "ClientEnumType",
});

@ArgsType()
export class CreateClientArgs
  implements Omit<Client, "id" | "createdAt" | "updatedAt">
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

  @Field(() => ClientEnumType, {
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
  caeId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  storeId: string;
}
