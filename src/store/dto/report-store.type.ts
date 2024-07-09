import { Field, ObjectType } from '@nestjs/graphql';
import { IsArray, IsNumber } from 'class-validator';
import { SaleType } from 'src/sale/dto';

@ObjectType()
export class ReportStoreType {
  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  totalSales: number;

  @Field(() => [SaleType], {
    nullable: true,
  })
  @IsArray()
  sales: SaleType[];

  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  totalSalesBalance: number;
}
