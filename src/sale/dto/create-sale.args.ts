import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Prisma, Sale } from '@prisma/client';
import { IsArray, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { CreateOrderSaleInput, OrderType } from 'src/order/dto';

@ArgsType()
export class CreateSaleArgs
  implements
    Omit<Sale, 'id' | 'createdAt' | 'updatedAt' | 'sellerId'>
{
  @Field(() => [CreateOrderSaleInput])
  @IsOptional()
  @IsArray()
  orders: OrderType[];

  @Field(() => ID,{
    nullable: true
  })
  @IsOptional()
  @IsUUID()
  clientId: string;
}
