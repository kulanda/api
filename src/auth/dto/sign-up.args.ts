import { ArgsType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

@ArgsType()
export class SignUpArgs {
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
  @IsPhoneNumber('AO')
  phone?: string;

  @Field()
  @IsStrongPassword()
  password: string;
}
