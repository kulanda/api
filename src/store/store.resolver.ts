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
import { GetUser } from "src/auth/decorator";
import { GqlAuthGuard } from "src/auth/guard";
import { CreateStoreArgs, ReportStoreType, StoreType } from "./dto";
import { StoreService } from "./store.service";
import { UseGuards } from "@nestjs/common";
import { ProductType } from "src/product/dto";
import { ProductService } from "src/product/product.service";
import { UserService } from "src/user/user.service";
import { UserType } from "src/user/dto";
import { SaleType } from "src/sale/dto";
import { SaleService } from "src/sale/sale.service";
import { ReportStoreOptionsInput } from "./dto/report-store-options.input";

@UseGuards(GqlAuthGuard)
@Resolver(() => StoreType)
export class StoreResolver {
  constructor(
    private storeService: StoreService,
    private productService: ProductService,
    private userService: UserService,
    private saleService: SaleService
  ) {}
  @Mutation(() => StoreType)
  async createStore(
    @Context("req") req,
    @Args() data: CreateStoreArgs
  ) {
    return this.storeService.createStore(req.client, req.companyId, data);
  }
  @Query(() => [StoreType])
  async getStores(
    @Context("req") req,
  ) {
    return this.storeService.getStores(req.client, req.companyId);
  }
  @Query(() => StoreType, {
    nullable: true,
  })
  async getStore(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.storeService.getStore(req.client, id);
  }
  @Query(() => ReportStoreType, {
    nullable: true,
  })
  async getStoreReport(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string,
    @Args("options", { type: () => ReportStoreOptionsInput, nullable: true })
    options: ReportStoreOptionsInput
  ) {
    return this.storeService.getStoreReport(req.client, id, options);
  }
  @ResolveField(() => [ProductType])
  async products(@Context("req") req, @Parent() store: StoreType) {
    return this.productService.getProducts(req.client, store.id);
  }
  @ResolveField(() => [UserType])
  async sellers(@Context("req") req, @Parent() store: StoreType) {
    return this.userService.getUsersByStory(req.client, store.id);
  }
  @ResolveField(() => [SaleType])
  async sales(@Context("req") req, @Parent() store: StoreType) {
    return this.saleService.getSales(req.client, store.id);
  }
}
