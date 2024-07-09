import { ArgsType, Field, ID } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsUUID,
} from 'class-validator';
import { UserType } from './user.type';

@ArgsType()
export class CreateUserStoreArgs
  implements
    Omit<UserType, 'id' | 'createdAt' | 'updatedAt' | 'companies' | 'access'>
{
  @Field()
  @IsString()
  fullName: string;

  @Field({
    nullable: true,
  })
  @IsString()
  @IsOptional()
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({
    nullable: true,
  })
  @IsPhoneNumber('AO')
  phone: string;

  @Field(() => ID)
  @IsUUID()
  storeId: string;

  @Field()
  @IsStrongPassword()
  password: string;
}
