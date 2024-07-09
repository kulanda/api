import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateOrderArgs, OrderType } from './dto';
import { GqlAuthGuard } from 'src/auth/guard';
import { UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { ProductService } from 'src/product/product.service';
import { ServiceService } from 'src/service/service.service';
import { ProductType } from 'src/product/dto';
import { ServiceType } from 'src/service/dto';

@UseGuards(GqlAuthGuard)
@Resolver(() => OrderType)
export class OrderResolver {
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private serviceService: ServiceService,
  ) {}
  @Mutation(() => OrderType)
  async createOrder(@Args() data: CreateOrderArgs) {
    return this.orderService.createOrder(data);
  }

  @Query(() => [OrderType])
  async getOrders(@Args('saleId', { type: () => ID }) saleId: string) {
    return this.orderService.getOrders(saleId);
  }
  @Query(() => OrderType, {
    nullable: true,
  })
  async getOrder(@Args('id', { type: () => ID }) id: string) {
    return this.orderService.getOrder(id);
  }
  @ResolveField(() => [ProductType])
  async products(@Parent() order: OrderType) {
    return this.productService.getProductsByOrder(order.id);
  }
  @ResolveField(() => [ServiceType])
  async services(@Parent() order: OrderType) {
    return this.serviceService.getServicesByOrder(order.id);
  }
}
