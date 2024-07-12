import { ArgsType, Field, ID, InputType } from "@nestjs/graphql";
import { Company } from "@prisma/client";
import { IsOptional, IsString, IsUUID, IsUrl } from "class-validator";

@InputType()
export class CreateCompanyInput
  implements Omit<Company, "id" | "tenantId" | "createdAt" | "updatedAt">
{
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
  @IsString()
  @IsUrl()
  @IsOptional()
  logo: string;

  @Field(() => ID)
  @IsUUID()
  caeId: string;
}
