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
import { CreateSaleArgs, SaleType } from "./dto";
import { GqlAuthGuard } from "src/auth/guard";
import { UseGuards } from "@nestjs/common";
import { SaleService } from "./sale.service";
import { UserService } from "src/user/user.service";
import { OrderService } from "src/order/order.service";
import { UserType } from "src/user/dto";
import { OrderType } from "src/order/dto";
import { GetUser } from "src/auth/decorator";
import { ClientType } from "src/client/dto";
import { ClientService } from "src/client/client.service";

@UseGuards(GqlAuthGuard)
@Resolver(() => SaleType)
export class SaleResolver {
  constructor(
    private saleService: SaleService,
    private orderService: OrderService,
    private sellerService: UserService,
    private clientService: ClientService
  ) {}
  @Mutation(() => SaleType)
  async createSale(
    @Context("req") req,
    @GetUser("id")
    sellerId: string,
    @Args() data: CreateSaleArgs
  ) {
    return this.saleService.createSale(req.client, sellerId, data);
  }
  @Query(() => [SaleType])
  async getSales(
    @Context("req") req,
    @Args("storeId", { type: () => ID }) storeId: string
  ) {
    return this.saleService.getSales(req.client, storeId);
  }
  @Query(() => SaleType, {
    nullable: true,
  })
  async getSale(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.saleService.getSale(req.client, id);
  }
  @ResolveField(() => [OrderType])
  async orders(@Context("req") req, @Parent() sale: SaleType) {
    return this.orderService.getOrders(req.client, sale.id);
  }
  @ResolveField(() => UserType, {
    nullable: true,
  })
  async seller(@Context("req") req, @Parent() sale: SaleType) {
    return this.sellerService.getUser(req.client, sale.sellerId);
  }
  @ResolveField(() => ClientType, {
    nullable: true,
  })
  async client(@Context("req") req, @Parent() sale: SaleType) {
    return this.clientService.getClient(req.client, sale.clientId);
  }
}
