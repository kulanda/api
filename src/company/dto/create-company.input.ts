import { ArgsType, Field, ID, InputType } from "@nestjs/graphql";
import { Company } from "@prisma/client";
import { IsDate, IsMultibyte, IsOptional, IsString, IsUUID, IsUrl } from "class-validator";
import { GraphQLUpload } from "graphql-upload-ts";

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

  @Field(() => GraphQLUpload,{
    nullable: true
  })
  @IsMultibyte()
  logo: any;

  @Field(() => ID)
  @IsUUID()
  caeId: string;

  @Field(() => Date, { nullable: true })
  @IsDate()
  saftExportDate: Date;
}
