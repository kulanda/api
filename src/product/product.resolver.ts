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
import {
  CreateProductArgs,
  EditProductArgs,
  FilterProductInput,
  ProductType,
} from "./dto";
import { GqlAuthGuard } from "src/auth/guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "src/auth/decorator";
import { ProductService } from "./product.service";
import { CategoryService } from "src/category/category.service";
import { CategoryType } from "src/category/dto";

@UseGuards(GqlAuthGuard)
@Resolver(() => ProductType)
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  @Mutation(() => ProductType)
  async createProduct(
    @Context("req") req,
    @GetUser({
      access: ["OWNER", "MANAGER"],
    })
    _: string,
    @Args() data: CreateProductArgs
  ) {
    return this.productService.createProduct(req.client, data);
  }
  @Mutation(() => ProductType)
  async editProduct(
    @Context("req") req,
    @GetUser({
      access: ["OWNER", "MANAGER"],
    })
    _: string,
    @Args("id", { type: () => ID }) id: string,
    @Args() data: EditProductArgs
  ) {
    return this.productService.editProduct(req.client, id, data);
  }
  @Query(() => [ProductType])
  async getProducts(
    @Context("req") req,
    @Args("storeId", { type: () => ID }) storeId: string,
    @Args("filter", { type: () => FilterProductInput, nullable: true })
    filter: FilterProductInput
  ) {
    return this.productService.getProducts(req.client, storeId, filter);
  }
  @Query(() => ProductType, {
    nullable: true,
  })
  async getProduct(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.productService.getProduct(req.client, id);
  }
  @ResolveField(() => CategoryType)
  async category(@Context("req") req, @Parent() product: ProductType) {
    return this.categoryService.getCategory(req.client, product.categoryId);
  }
}
