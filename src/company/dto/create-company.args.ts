import { ArgsType, Field, ID } from "@nestjs/graphql";
import { Company } from "@prisma/client";
import {
  IsDate,
  IsEnum,
  IsMultibyte,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  IsUrl,
} from "class-validator";
import { GraphQLUpload } from "graphql-upload-ts";
import { VatRegimeEnumType } from "./company.type";

@ArgsType()
export class CreateCompanyArgs
  implements Omit<Company, "id" | "createdAt" | "updatedAt">
{
  @Field(() => ID)
  @IsUUID()
  tenantId: string;

  @Field(() => String)
  @IsString()
  nif: string;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsPhoneNumber()
  fax: string;

  @Field(() => VatRegimeEnumType)
  @IsEnum([
    "GENERAL_REGIME",
    "EXCLUSION_REGIME",
    "SIMPLIFIED_REGIME",
  ])
  vatRegime: string;
  

  @Field(() => GraphQLUpload, {
    nullable: true,
  })
  @IsMultibyte()
  logo: any;

  @Field(() => ID)
  @IsUUID()
  caeId: string;

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  saftExportDate: Date;
}
