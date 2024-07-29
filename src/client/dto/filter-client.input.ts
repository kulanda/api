import { Field, InputType } from "@nestjs/graphql";
import { Client } from "@prisma/client";
import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

@InputType()
export class FilterClientPaginateInput {
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
export class FilterClientInput
  implements Pick<Client, "fullName" | "email" | "phone" | 'storeId'>
{
  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  storeId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  fullName: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  email: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  phone: string;

  @Field(() => FilterClientPaginateInput, {
    nullable: true,
  })
  @IsOptional()
  paginate: FilterClientPaginateInput;
}
