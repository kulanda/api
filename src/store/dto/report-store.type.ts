import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsArray, IsNumber } from "class-validator";
import { SaleType } from "src/sale/dto";

@ObjectType()
export class ReportStoreType {
  @Field(() => [SaleType], {
    nullable: true,
  })
  @IsArray()
  sales: SaleType[];

  @Field(() => Int, {
    nullable: true,
  })
  @IsNumber()
  totalSales: number

  @Field(() => Int, {
    nullable: true,
  })
  @IsNumber()
  totalSalesBalance: number
}
