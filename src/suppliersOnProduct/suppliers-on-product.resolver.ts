import { UseGuards } from "@nestjs/common";
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
import { GqlAuthGuard } from "src/auth/guard";
import { SupplierOnProductType, CreateSupplierOnProductArgs } from "./dto";
import { FilterSupplierOnProductInput } from "./dto/filter-suppliers-on-product.input";
import { SupplierOnProductService } from "./suppliers-on-product.service";
import { SupplierType } from "src/supplier/dto";
import { ProductService } from "src/product/product.service";
import { SupplierService } from "src/supplier/supplier.service";
import { ProductType } from "src/product/dto";
@UseGuards(GqlAuthGuard)
@Resolver(() => SupplierOnProductType)
export class SupplierOnProductResolver {
  constructor(
    private supplierOnProductService: SupplierOnProductService,
    private productService: ProductService,
    private supplierService: SupplierService
  ) {}
  @Mutation(() => SupplierOnProductType)
  async createSupplierOnProduct(
    @Context("req") req,
    @Args() data: CreateSupplierOnProductArgs
  ) {
    return this.supplierOnProductService.createSupplierOnProduct(
      req.client,
      data
    );
  }
  @Query(() => [SupplierOnProductType])
  async getSupplierOnProducts(
    @Context("req") req,
    @Args("filter", {
      type: () => FilterSupplierOnProductInput,
      nullable: true,
    })
    filter: FilterSupplierOnProductInput
  ) {
    return this.supplierOnProductService.getSupplierOnProducts(
      req.client,
      filter
    );
  }
  @Query(() => SupplierOnProductType, {
    nullable: true,
  })
  async getSupplierOnProduct(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.supplierOnProductService.getSupplierOnProduct(req.client, id);
  }
  @ResolveField(() => ProductType)
  async product(
    @Context("req") req,
    @Parent() supplier: SupplierOnProductType
  ) {
    return this.productService.getProduct(req.client, supplier.productId);
  }
  @ResolveField(() => SupplierType)
  async supplier(
    @Context("req") req,
    @Parent() supplier: SupplierOnProductType
  ) {
    return this.supplierService.getSupplier(req.client, supplier.supplierId);
  }
}
