import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Prisma, Sale } from '@prisma/client';
import { IsArray, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { CreateOrderSaleInput, OrderType } from 'src/order/dto';

@ArgsType()
export class CreateSaleArgs
  implements
    Omit<Sale, 'id' | 'createdAt' | 'updatedAt' | 'sellerId' | 'totalPrice' | 'code'>
{
  
  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  change: Prisma.Decimal;
  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  cash: Prisma.Decimal;
  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  bankCard: Prisma.Decimal;

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  totalPrice: Prisma.Decimal;

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
