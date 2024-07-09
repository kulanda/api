import { ArgsType, Field } from '@nestjs/graphql';
import { IsPhoneNumber, IsString } from 'class-validator';

@ArgsType()
export class SignInWithPhoneArgs {
  @Field(() => String)
  @IsPhoneNumber('AO')
  phone: string;

  @Field()
  @IsString()
  password: string;
}
