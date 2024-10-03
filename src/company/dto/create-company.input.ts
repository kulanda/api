import { Field, ID, InputType } from "@nestjs/graphql";
import { Company } from "@prisma/client";
import {
  IsDate,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from "class-validator";
import { VatRegimeEnumType } from "./company.type";

@InputType()
export class CreateCompanyInput
  implements
    Omit<Company, "id" | "tenantId" | "logo" | "createdAt" | "updatedAt">
{
  @Field(() => String, {
    nullable: true,
  })
  @IsPhoneNumber()
  @IsOptional()
  fax: string;

  @Field(() => VatRegimeEnumType)
  @IsEnum([
    "GENERAL_REGIME",
    "EXCLUSION_REGIME",
    "SIMPLIFIED_REGIME",
  ])
  vatRegime: string;

  @Field(() => String)
  @IsString()
  nif: string;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => ID)
  @IsUUID()
  caeId: string;

  @Field(() => Date, { nullable: true })
  @IsDate()
  saftExportDate: Date;
}
