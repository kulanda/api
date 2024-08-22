import { ArgsType, Field, ID } from "@nestjs/graphql";
import { User } from "@prisma/client";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsUUID,
} from "class-validator";
import { AccessEnumType } from "src/user/dto";

@ArgsType()
export class SignUpArgs implements Pick<User, "access"> {
  @Field()
  @IsString()
  fullName: string;

  @Field({
    nullable: true,
  })
  @IsString()
  @IsOptional()
  username?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({
    nullable: true,
  })
  @IsPhoneNumber()
  phone?: string;

  @Field(() => AccessEnumType, {
    nullable: true,
    defaultValue: "SELLER",
  })
  @IsEnum(["SELLER", "OWNER", "MANAGER"])
  access: keyof typeof AccessEnumType;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  storeId: string;

  @Field()
  @IsStrongPassword()
  password: string;
}
