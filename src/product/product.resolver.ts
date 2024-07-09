import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  CreateProductArgs,
  EditProductArgs,
  FilterProductInput,
  ProductType,
} from './dto';
import { GqlAuthGuard } from 'src/auth/guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { ProductService } from './product.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryType } from 'src/category/dto';

@UseGuards(GqlAuthGuard)
@Resolver(() => ProductType)
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {}
  @Mutation(() => ProductType)
  async createProduct(
    @GetUser({
      access: ['OWNER', 'MANAGER'],
    })
    _: string,
    @Args() data: CreateProductArgs,
  ) {
    return this.productService.createProduct(data);
  }
  @Mutation(() => ProductType)
  async editProduct(
    @GetUser({
      access: ['OWNER', 'MANAGER'],
    })
    _: string,
    @Args('id', { type: () => ID }) id: string,
    @Args() data: EditProductArgs,
  ) {
    return this.productService.editProduct(id, data);
  }
  @Query(() => [ProductType])
  async getProducts(
    @Args('storeId', { type: () => ID }) storeId: string,
    @Args('filter', { type: () => FilterProductInput, nullable: true })
    filter: FilterProductInput,
  ) {
    return this.productService.getProducts(storeId, filter);
  }
  @Query(() => ProductType, {
    nullable: true,
  })
  async getProduct(@Args('id', { type: () => ID }) id: string) {
    return this.productService.getProduct(id);
  }
  @ResolveField(() => CategoryType)
  async category(@Parent() product: ProductType) {
    return this.categoryService.getCategory(product.categoryId);
  }
}
