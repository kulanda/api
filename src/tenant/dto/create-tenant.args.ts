import { ArgsType, Field, ID } from "@nestjs/graphql";
import { Tenant } from "@prisma/client";
import {
  IsDate,
  IsEmail,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";
import { CreateCompanyInput } from "src/company/dto";

@ArgsType()
export class CreateTenantArgs
  implements Omit<Tenant, "id" | "createdAt" | "updatedAt">
{
  @Field(() => String)
  @IsString()
  fullName: string;

  @Field(() => String)
  @IsString()
  @MinLength(4, {
    message: "Username is too short. Minimal length is $constraint1 characters",
  })
  @MaxLength(20, {
    message: "Username is too long. Maximal length is $constraint1 characters",
  })
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message: "Username can only contain letters, numbers, and underscores",
  })
  username: string;

  @Field(() => String)
  @IsPhoneNumber("AO")
  phone: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsEmail()
  email: string;

  @Field(() => CreateCompanyInput)
  @IsObject()
  company: CreateCompanyInput;

  @Field(() => ID, {
    nullable: true,
  })
  @IsOptional()
  @IsUUID()
  partnerId: string;

  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  expiresAt: Date;
}
