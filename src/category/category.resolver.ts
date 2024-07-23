import {
  Args,
  Context,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { CategoryType, CreateCategoryArgs } from "./dto";
import { CategoryService } from "./category.service";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/auth/guard";
import { ChargeType } from "src/charge/dto";
import { ChargeService } from "src/charge/charge.service";

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryType)
export class CategoryResolver {
  constructor(
    private categoryService: CategoryService,
    private chargeService: ChargeService
  ) {}
  @Mutation(() => CategoryType)
  async createCategory(@Context("req") req, @Args() data: CreateCategoryArgs) {
    return this.categoryService.createCategory(req.client, data);
  }
  @Query(() => [CategoryType])
  async getCategories(@Context("req") req) {
    return this.categoryService.getCategories(req.client);
  }
  @Query(() => CategoryType, {
    nullable: true,
  })
  async getCategory(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.categoryService.getCategory(req.client, id);
  }
  @Query(() => [CategoryType], {
    nullable: true,
  })
  async getCategoriesByStore(
    @Context("req") req,
    @Args("storeId", { type: () => ID }) storeId: string
  ) {
    return this.categoryService.getCategoriesByStore(req.client, storeId);
  }
  @ResolveField(() => [ChargeType])
  async charges(@Context("req") req, @Parent() category: CategoryType) {
    return this.chargeService.getCharges(req.client, {
      categoryId: category.id,
    });
  }
}
