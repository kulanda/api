import { Field, InputType } from "@nestjs/graphql";
import { Invoice } from "@prisma/client";
import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

@InputType()
export class FilterInvoicePaginateInput {
  @Field(() => Number, {
    nullable: true,
    defaultValue: 1,
  })
  @IsNumber()
  page: number;
  @Field(() => Number, {
    nullable: true,
    defaultValue: 30,
  })
  @IsNumber()
  limit: number;
}

@InputType()
export class FilterInvoiceDateInput {
  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  start: Date;
  @Field(() => Date, {
    nullable: true,
  })
  @IsDate()
  end: Date;
}

@InputType()
export class FilterInvoiceInput implements Pick<Invoice, 'number'  > {
  @Field(() => Number, {
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  number: number;

  @Field(() => FilterInvoicePaginateInput, {
    nullable: true,
  })
  @IsOptional()
  paginate: FilterInvoicePaginateInput;

  @Field(() => FilterInvoiceDateInput, {
    nullable: true,
  })
  @IsOptional()
  period: FilterInvoiceDateInput;
}
