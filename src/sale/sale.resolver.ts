import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateSaleArgs, SaleType } from './dto';
import { GqlAuthGuard } from 'src/auth/guard';
import { UseGuards } from '@nestjs/common';
import { SaleService } from './sale.service';
import { UserService } from 'src/user/user.service';
import { OrderService } from 'src/order/order.service';
import { UserType } from 'src/user/dto';
import { OrderType } from 'src/order/dto';
import { GetUser } from 'src/auth/decorator';

@UseGuards(GqlAuthGuard)
@Resolver(() => SaleType)
export class SaleResolver {
  constructor(
    private saleService: SaleService,
    private orderService: OrderService,
    private sellerService: UserService,
  ) {}
  @Mutation(() => SaleType)
  async createSale(
    @GetUser('id')
    sellerId: string,
    @Args() data: CreateSaleArgs,
  ) {
    return this.saleService.createSale(sellerId, data);
  }
  @Query(() => [SaleType])
  async getSales(@Args('storeId', { type: () => ID }) storeId: string) {
    return this.saleService.getSales(storeId);
  }
  @Query(() => SaleType, {
    nullable: true,
  })
  async getSale(@Args('id', { type: () => ID }) id: string) {
    return this.saleService.getSale(id);
  }
  @ResolveField(() => [OrderType])
  async orders(@Parent() sale: SaleType) {
    return this.orderService.getOrders(sale.id);
  }
  @ResolveField(() => UserType, {
    nullable: true,
  })
  async seller(@Parent() sale: SaleType) {
    return this.sellerService.getUser(sale.sellerId);
  }
}
