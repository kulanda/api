import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GetUser } from 'src/auth/decorator';
import { GqlAuthGuard } from 'src/auth/guard';
import { CreateStoreArgs, ReportStoreType, StoreType } from './dto';
import { StoreService } from './store.service';
import { UseGuards } from '@nestjs/common';
import { ProductType } from 'src/product/dto';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';
import { UserType } from 'src/user/dto';
import { SaleType } from 'src/sale/dto';
import { SaleService } from 'src/sale/sale.service';
import { ReportStoreOptionsInput } from './dto/report-store-options.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => StoreType)
export class StoreResolver {
  constructor(
    private storeService: StoreService,
    private productService: ProductService,
    private userService: UserService,
    private saleService: SaleService,
  ) {}
  @Mutation(() => StoreType)
  async createStore(
    @GetUser({
      data: 'id',
      access: ['OWNER'],
    })
    userId: string,
    @Args() data: CreateStoreArgs,
  ) {
    return this.storeService.createStore(userId, data);
  }
  @Query(() => [StoreType])
  async getStores(@Args('companyId', { type: () => ID }) companyId: string) {
    return this.storeService.getStores(companyId);
  }
  @Query(() => StoreType, {
    nullable: true,
  })
  async getStore(@Args('id', { type: () => ID }) id: string) {
    return this.storeService.getStore(id);
  }
  @Query(() => ReportStoreType, {
    nullable: true,
  })
  async getStoreReport(
    @Args('id', { type: () => ID }) id: string,
    @Args('options', { type: () => ReportStoreOptionsInput, nullable: true })
    options: ReportStoreOptionsInput,
  ) {
    return this.storeService.getStoreReport(id, options);
  }
  @ResolveField(() => [ProductType])
  async products(@Parent() store: StoreType) {
    return this.productService.getProducts(store.id);
  }
  @ResolveField(() => [UserType])
  async sellers(@Parent() store: StoreType) {
    return this.userService.getUsersByStory(store.id);
  }
  @ResolveField(() => [SaleType])
  async sales(@Parent() store: StoreType) {
    return this.saleService.getSales(store.id);
  }
}
