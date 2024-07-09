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
import { CreateServiceArgs, EditServiceArgs, ServiceType } from "./dto";
import { GqlAuthGuard } from "src/auth/guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "src/auth/decorator";
import { ServiceService } from "./service.service";
import { CategoryService } from "src/category/category.service";
import { CategoryType } from "src/category/dto";
import { FilterServiceInput } from "./dto/filter-service.input";

@UseGuards(GqlAuthGuard)
@Resolver(() => ServiceType)
export class ServiceResolver {
  constructor(
    private serviceService: ServiceService,
    private categoryService: CategoryService
  ) {}
  @Mutation(() => ServiceType)
  async createService(
    @Context("req") req,
    @GetUser({
      access: ["OWNER", "MANAGER"],
    })
    _: string,
    @Args() data: CreateServiceArgs
  ) {
    return this.serviceService.createService(req.client, data);
  }
  @Mutation(() => ServiceType)
  async editService(
    @Context("req") req,
    @GetUser({
      access: ["OWNER", "MANAGER"],
    })
    _: string,
    @Args("id", { type: () => ID }) id: string,
    @Args() data: EditServiceArgs
  ) {
    return this.serviceService.editService(req.client, id, data);
  }
  @Query(() => [ServiceType])
  async getServices(
    @Context("req") req,
    @Args("storeId", { type: () => ID }) storeId: string,
    @Args("filter", { type: () => FilterServiceInput, nullable: true })
    filter: FilterServiceInput
  ) {
    return this.serviceService.getServices(req.client, storeId, filter);
  }
  @Query(() => ServiceType, {
    nullable: true,
  })
  async getService(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.serviceService.getService(req.client, id);
  }
  @ResolveField(() => CategoryType)
  async category(@Context("req") req, @Parent() service: ServiceType) {
    return this.categoryService.getCategory(req.client, service.categoryId);
  }
}
