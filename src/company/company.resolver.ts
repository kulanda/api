import { UseGuards } from '@nestjs/common';
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
import { CompanyType, CreateCompanyArgs } from './dto';
import { CompanyService } from './company.service';
import { StoreType } from 'src/store/dto';
import { StoreService } from 'src/store/store.service';
import { CAEType } from 'src/cae/dto';
import { CaeService } from 'src/cae/CAE.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => CompanyType)
export class CompanyResolver {
  constructor(
    private companyService: CompanyService,
    private storeService: StoreService,
    private caeService: CaeService,
  ) {}
  @Mutation(() => CompanyType)
  async createCompany(
    @GetUser({
      data: 'id',
      access: ['OWNER'],
    })
    userId: string,
    @Args() data: CreateCompanyArgs,
  ) {
    return this.companyService.createCompany(userId, data);
  }
  @Query(() => [CompanyType])
  async getCompanies(
    @GetUser({
      data: 'id',
      access: ['OWNER'],
    })
    userId: string,
  ) {
    return this.companyService.getCompanies(userId);
  }
  @Query(() => CompanyType, {
    nullable: true,
  })
  async getCompany(@Args('id', { type: () => ID }) id: string) {
    return this.companyService.getCompany(id);
  }
  @ResolveField(() => [StoreType])
  async stores(@Parent() company: CompanyType) {
    return this.storeService.getStores(company.id);
  }
  @ResolveField(() => CAEType)
  async cae(@Parent() company: CompanyType) {
    return this.caeService.getCAE(company.caeId);
  }
}
