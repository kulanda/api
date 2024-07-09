import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Order } from '@prisma/client';
import { IsOptional, IsString, IsUUID } from 'class-validator';

@ArgsType()
export class CreateOrderArgs
  implements Omit<Order, 'id' | 'createdAt' | 'updatedAt'>
{
  @Field(() => ID)
  @IsString()
  saleId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @IsUUID()
  productId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @IsUUID()
  serviceId: string;
}
