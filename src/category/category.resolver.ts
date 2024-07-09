import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryType, CreateCategoryArgs } from './dto';
import { CategoryService } from './category.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryType)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}
  @Mutation(() => CategoryType)
  async createCategory(@Args() data: CreateCategoryArgs) {
    return this.categoryService.createCategory(data);
  }
  @Query(() => [CategoryType])
  async getCategories() {
    return this.categoryService.getCategories();
  }
  @Query(() => CategoryType, {
    nullable: true,
  })
  async getCategory(@Args('id', { type: () => ID }) id: string) {
    return this.categoryService.getCategory(id);
  }
  @Query(() => [CategoryType], {
    nullable: true,
  })
  async getCategoriesByStore(
    @Args('storeId', { type: () => ID }) storeId: string,
  ) {
    return this.categoryService.getCategoriesByStore(storeId);
  }
}
