import { Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateOrderSaleInput {
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
