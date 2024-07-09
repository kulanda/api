import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Sector } from '@prisma/client';
import { IsString } from 'class-validator';

@ObjectType()
export class SectorType implements Sector {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
