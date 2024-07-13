import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsObject, IsString } from "class-validator";
import { CreateCompanyInput } from "src/company/dto";


@ArgsType()
export class CreateTenantArgs{
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  username?: string;

  @Field(() => CreateCompanyInput)
  @IsObject()
  company: CreateCompanyInput
}


