import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { $Enums, User } from '@prisma/client';

export enum AccessEnumType {
  SELLER = 'SELLER',
  OWNER = 'OWNER',
  MANAGER = 'MANAGER',
}

registerEnumType(AccessEnumType, {
  name: 'AccessEnumType',
});

@ObjectType()
export class UserType implements Omit<User, 'hash' | 'companies'> {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  fullName: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => AccessEnumType)
  access: $Enums.Access;

  @Field(() => ID, {
    nullable: true,
  })
  storeId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
