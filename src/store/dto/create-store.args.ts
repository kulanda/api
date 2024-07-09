import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Store } from '@prisma/client';
import { IsString } from 'class-validator';

@ArgsType()
export class CreateStoreArgs
  implements Omit<Store, 'id' | 'createdAt' | 'updatedAt' | 'companyId'>
{
  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  designation: string;

  @Field(() => String)
  @IsString()
  phone: string;

  @Field(() => ID)
  @IsString()
  companyId: string;
}
