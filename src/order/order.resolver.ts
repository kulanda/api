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
import { CreateOrderArgs, OrderType } from "./dto";
import { GqlAuthGuard } from "src/auth/guard";
import { UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { ProductService } from "src/product/product.service";
import { ServiceService } from "src/service/service.service";
import { ProductType } from "src/product/dto";
import { ServiceType } from "src/service/dto";

@UseGuards(GqlAuthGuard)
@Resolver(() => OrderType)
export class OrderResolver {
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private serviceService: ServiceService
  ) {}
  @Mutation(() => OrderType)
  async createOrder(@Context("req") req, @Args() data: CreateOrderArgs) {
    return this.orderService.createOrder(req.client, data);
  }

  @Query(() => [OrderType])
  async getOrders(
    @Context("req") req,
    @Args("saleId", { type: () => ID }) saleId: string
  ) {
    return this.orderService.getOrders(req.client, saleId);
  }
  @Query(() => OrderType, {
    nullable: true,
  })
  async getOrder(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.orderService.getOrder(req.client, id);
  }
  @ResolveField(() => [ProductType])
  async products(@Context("req") req, @Parent() order: OrderType) {
    return this.productService.getProductsByOrder(req.client, order.id);
  }
  @ResolveField(() => [ServiceType])
  async services(@Context("req") req, @Parent() order: OrderType) {
    return this.serviceService.getServicesByOrder(req.client, order.id);
  }
}
