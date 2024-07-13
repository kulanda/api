import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TenantCredentialsType {
  @Field(() => String)
  access_key: string;
}
