import { UseGuards } from "@nestjs/common";
import { Args, Context, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "src/auth/guard";
import { SupplierType, CreateSupplierArgs } from "./dto";
import { SupplierService } from "./supplier.service";
import { FilterSupplierInput } from "./dto/filter-supplier.input";

@UseGuards(GqlAuthGuard)
@Resolver(() => SupplierType)
export class SupplierResolver {
  constructor(private supplierService: SupplierService) {}
  @Mutation(() => SupplierType)
  async createSupplier(@Context("req") req, @Args() data: CreateSupplierArgs) {
    return this.supplierService.createSupplier(req.client, data);
  }
  @Query(() => [SupplierType])
  async getSuppliers(
    @Context("req") req,
    @Args("filter", { type: () => FilterSupplierInput, nullable: true })
    filter: FilterSupplierInput
  ) {
    return this.supplierService.getSuppliers(req.client, filter);
  }
  @Query(() => SupplierType, {
    nullable: true,
  })
  async getSupplier(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.supplierService.getSupplier(req.client, id);
  }
  @Query(() => [SupplierType], {
    nullable: true,
  })
  async getSuppliersByStore(
    @Context("req") req,
    @Args("storeId", { type: () => ID }) storeId: string
  ) {
    return this.supplierService.getSuppliersByStore(req.client, storeId);
  }
}
