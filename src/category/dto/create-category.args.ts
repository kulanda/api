import { ArgsType, Field, ID, registerEnumType } from "@nestjs/graphql";
import { Category } from "@prisma/client";
import { IsArray, IsEnum, IsOptional, IsString } from "class-validator";

export enum CategoryEnumType {
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
}

registerEnumType(CategoryEnumType, {
  name: "CategoryEnumType",
});

@ArgsType()
export class CreateCategoryArgs
  implements Omit<Category, "id" | "createdAt" | "updatedAt">
{
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  description: string;

  @Field(() => CategoryEnumType)
  @IsEnum(["PRODUCT", "SERVICE"])
  type: keyof typeof CategoryEnumType;

  @Field(() => [ID!]!, {
    nullable: true,
    defaultValue: []
  })
  @IsArray()
  @IsOptional()
  charges: string[];
}
