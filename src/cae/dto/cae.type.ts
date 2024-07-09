import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { CAE } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

@ObjectType()
export class CAEType implements CAE {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Int)
  @IsNumber()
  code: number;

  @Field(() => ID)
  sectorId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
