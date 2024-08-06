import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Company } from "@prisma/client";
import { StoreType } from "src/store/dto";

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
  logo: string;

  @Field(() => ID)
  caeId: string;

  @Field(() => [StoreType])
  stores?: StoreType[];

  @Field(() => Date)
  saftExportDate: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
