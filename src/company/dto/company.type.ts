import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Company } from "@prisma/client";
import { StoreType } from "src/store/dto";

export enum VatRegimeEnumType {
  GENERAL_REGIME = "GENERAL_REGIME",
  EXCLUSION_REGIME = "EXCLUSION_REGIME",
  SIMPLIFIED_REGIME = "SIMPLIFIED_REGIME",
}

registerEnumType(VatRegimeEnumType, {
  name: "VatRegimeEnumType",
});

@ObjectType()
export class CompanyType implements Omit<Company, "userId" | "Store"> {
  @Field(() => ID)
  tenantId: string;

  @Field(() => ID)
  id: string;

  @Field(() => String)
  nif: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  fax: string;

  @Field(() => VatRegimeEnumType)
  vatRegime: string;

  @Field(() => String)
  logo: string;

  @Field(() => ID)
  caeId: string;

  @Field(() => [StoreType])
  stores?: StoreType[];

  @Field(() => Date, {
    nullable: true,
  })
  saftExportDate: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
