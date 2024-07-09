import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@ArgsType()
export class SignInArgs {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;
}
