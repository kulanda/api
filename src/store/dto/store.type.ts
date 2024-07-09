import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Store } from '@prisma/client';
import { IsString } from 'class-validator';

@ObjectType()
export class StoreType implements Omit<Store, 'companyId'> {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  designation: string;

  @Field(() => String)
  @IsString()
  phone: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
