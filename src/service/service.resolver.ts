import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateServiceArgs, EditServiceArgs, ServiceType } from './dto';
import { GqlAuthGuard } from 'src/auth/guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { ServiceService } from './service.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryType } from 'src/category/dto';
import { FilterServiceInput } from './dto/filter-service.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => ServiceType)
export class ServiceResolver {
  constructor(
    private serviceService: ServiceService,
    private categoryService: CategoryService,
  ) {}
  @Mutation(() => ServiceType)
  async createService(
    @GetUser({
      access: ['OWNER', 'MANAGER'],
    })
    _: string,
    @Args() data: CreateServiceArgs,
  ) {
    return this.serviceService.createService(data);
  }
  @Mutation(() => ServiceType)
  async editService(
    @GetUser({
      access: ['OWNER', 'MANAGER'],
    })
    _: string,
    @Args('id', { type: () => ID }) id: string,
    @Args() data: EditServiceArgs,
  ) {
    return this.serviceService.editService(id, data);
  }
  @Query(() => [ServiceType])
  async getServices(
    @Args('storeId', { type: () => ID }) storeId: string,
    @Args('filter', { type: () => FilterServiceInput, nullable: true })
    filter: FilterServiceInput,
  ) {
    return this.serviceService.getServices(storeId, filter);
  }
  @Query(() => ServiceType, {
    nullable: true,
  })
  async getService(@Args('id', { type: () => ID }) id: string) {
    return this.serviceService.getService(id);
  }
  @ResolveField(() => CategoryType)
  async category(@Parent() service: ServiceType) {
    return this.categoryService.getCategory(service.categoryId);
  }
}
