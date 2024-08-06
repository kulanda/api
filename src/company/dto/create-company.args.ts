import { ArgsType, Field, ID } from "@nestjs/graphql";
import { Company } from "@prisma/client";
import { IsOptional, IsString, IsUUID, IsUrl } from "class-validator";

@ArgsType()
export class CreateCompanyArgs
  implements Omit<Company, "id" | "saftExportDate" | "createdAt" | "updatedAt">
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
  @IsString()
  @IsUrl()
  @IsOptional()
  logo: string;

  @Field(() => ID)
  @IsUUID()
  caeId: string;
}
