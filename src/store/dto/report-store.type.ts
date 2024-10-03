import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { IsArray, IsNumber } from "class-validator";
import { SaleType } from "src/sale/dto";

@ObjectType()
export class ReportStoreType {
  @Field(() => [SaleType], {
    nullable: true,
  })
  @IsArray()
  sales: SaleType[];

  @Field(() => Float, {
    nullable: true,
  })
  @IsNumber()
  totalSales: number

  @Field(() => Float, {
    nullable: true,
  })
  @IsNumber()
  totalSalesBalance: number
}
