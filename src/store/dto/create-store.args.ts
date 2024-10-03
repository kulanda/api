import { ArgsType, Field, ID, registerEnumType } from "@nestjs/graphql";
import { Store } from "@prisma/client";
import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";

export enum StoreSaleEnumType {
  DEFAULT = "DEFAULT",
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
}

registerEnumType(StoreSaleEnumType, {
  name: "StoreSaleEnumType",
});

@ArgsType()
export class CreateStoreArgs
  implements Omit<Store, "id" | "createdAt" | "updatedAt" | "companyId">
{
  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  designation: string;

  @Field(() => String)
  @IsString()
  phone: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  globalSale: boolean;

  @Field(() => StoreSaleEnumType, {
    nullable: true,
    defaultValue: "DEFAULT",
  })
  @IsEnum(["DEFAULT", "PRODUCT", "SERVICE"])
  saleType: string;
}
