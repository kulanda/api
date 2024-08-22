import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Store } from '@prisma/client';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { StoreSaleEnumType } from './create-store.args';

@ObjectType()
export class StoreType implements Omit<Store, 'companyId'> {
  
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  designation: string;

  @Field(() => String)
  @IsString()
  phone: string;

  @Field(() => String,{
    nullable: true
  })
  @IsOptional()
  @IsBoolean()
  globalSale: boolean;

  @Field(() => StoreSaleEnumType, {
    nullable: true,
    defaultValue: "DEFAULT",
  })
  @IsEnum(["DEFAULT", "PRODUCT", "SERVICE"])
  saleType: string

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
