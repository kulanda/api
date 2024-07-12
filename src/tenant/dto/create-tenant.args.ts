import { ArgsType, Field } from "@nestjs/graphql";
import { Tenant } from "@prisma/client";
import { IsNotEmpty, IsObject, IsString, IsStrongPassword } from "class-validator";
import { CompanyType, CreateCompanyInput } from "src/company/dto";


@ArgsType()
export class CreateTenantArgs{
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name?: string;

  @Field(() => CreateCompanyInput)
  @IsObject()
  company: CreateCompanyInput
}


