import { ArgsType, Field, ID, ObjectType } from "@nestjs/graphql";
import { Tenant } from "@prisma/client";
import { IsNotEmpty, IsObject, IsString } from "class-validator";
import { CompanyType, CreateCompanyInput } from "src/company/dto";

@ObjectType()
export class TenantType implements Tenant {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsString()
  key: string;

  @Field(() => CompanyType)
  @IsObject()
  company: CompanyType;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
