import { ArgsType, Field, ID, registerEnumType } from "@nestjs/graphql";
import { Category } from "@prisma/client";
import { IsArray, IsEnum, IsOptional, IsString, IsUUID } from "class-validator";
import { CategoryEnumType } from "./create-category.args";

@ArgsType()
export class EditCategoryArgs
  implements Omit<Category, "createdAt" | "updatedAt">
{
  @Field(() => String)
  @IsUUID()
  id: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  description: string;

  @Field(() => CategoryEnumType, {
    nullable: true,
  })
  @IsEnum(["PRODUCT", "SERVICE"])
  @IsOptional()
  type: keyof typeof CategoryEnumType;

  @Field(() => [ID!]!, {
    nullable: true,
  })
  @IsArray()
  @IsOptional()
  charges: string[];
}
