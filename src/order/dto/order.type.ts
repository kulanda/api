import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Order } from '@prisma/client';
import { IsString, IsUUID } from 'class-validator';

@ObjectType()
export class OrderType implements Order {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  @IsString()
  @IsUUID()
  saleId: string;

  @Field(() => ID)
  @IsString()
  @IsUUID()
  productId: string;

  @Field(() => ID)
  @IsString()
  @IsUUID()
  serviceId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
