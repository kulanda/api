import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthTokenType {
  @Field()
  access_token?: string;
}
