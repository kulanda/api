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
import { ChargeService } from "./charge.service";
import { ChargeType, CreateChargeArgs } from "./dto";
import { GqlAuthGuard } from "src/auth/guard";
import { UseGuards } from "@nestjs/common";
import { ProductType } from "src/product/dto";
import { ProductService } from "src/product/product.service";
import { ServiceService } from "src/service/service.service";
import { ServiceType } from "src/service/dto";
import { CategoryService } from "src/category/category.service";
import { CategoryType } from "src/category/dto";

@UseGuards(GqlAuthGuard)
@Resolver(() => ChargeType)
export class ChargeResolver {
  constructor(
    private chargeService: ChargeService,
    private productService: ProductService,
    private serviceService: ServiceService,
    private categoryService: CategoryService
  ) {}
  @Mutation(() => ChargeType)
  async createCharge(@Context("req") req, @Args() data: CreateChargeArgs) {
    return this.chargeService.createCharge(req.client, data);
  }
  @Query(() => [ChargeType])
  async getCharges(@Context("req") req) {
    return this.chargeService.getCharges(req.client);
  }
  @Query(() => ChargeType, {
    nullable: true,
  })
  async getCharge(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.chargeService.getCharge(req.client, id);
  }
  @Query(() => [ChargeType], {
    nullable: true,
  })
  async getChargesByStore(
    @Context("req") req,
    @Args("storeId", { type: () => ID }) storeId: string
  ) {
    return this.chargeService.getChargesByStore(req.client, storeId);
  }
  @ResolveField(() => ProductType, {
    nullable: true,
  })
  async product(@Context("req") req, @Parent() charge: ChargeType) {
    return this.productService.getProduct(req.client, charge.categoryId);
  }
  @ResolveField(() => ServiceType, {
    nullable: true,
  })
  async service(@Context("req") req, @Parent() charge: ChargeType) {
    return this.serviceService.getService(req.client, charge.serviceId);
  }
  @ResolveField(() => CategoryType, {
    nullable: true,
  })
  async category(@Context("req") req, @Parent() charge: ChargeType) {
    return this.categoryService.getCategory(req.client, charge.categoryId);
  }
}
