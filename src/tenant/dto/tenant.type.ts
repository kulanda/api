import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Tenant } from "@prisma/client";

@ObjectType()
export class TenantType implements Tenant {
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

  @Field(() => ID)
  partnerId: string;

  @Field(() => Date)
  expiresAt: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
