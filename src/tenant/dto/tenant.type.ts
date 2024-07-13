import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Tenant } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

@ObjectType()
export class TenantType implements Tenant {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  username: string;

  @Field(() => String)
  @IsString()
  key: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
