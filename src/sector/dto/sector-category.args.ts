import { ArgsType, Field } from '@nestjs/graphql';
import { Sector } from '@prisma/client';
import { IsString } from 'class-validator';

@ArgsType()
export class CreateCategoryArgs
  implements Omit<Sector, 'id' | 'createdAt' | 'updatedAt'>
{
  @Field(() => String)
  @IsString()
  name: string;
}
