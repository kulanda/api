import { ArgsType, Field, ID, Int } from '@nestjs/graphql';
import { CAE } from '@prisma/client';
import { IsNumber, IsString, IsUUID } from 'class-validator';

@ArgsType()
export class CreateCAEArgs
  implements Omit<CAE, 'id' | 'createdAt' | 'updatedAt'>
{
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Int)
  @IsNumber()
  code: number;

  @Field(() => ID)
  @IsUUID()
  sectorId: string;
}
