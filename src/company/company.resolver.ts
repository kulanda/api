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
import { GetUser } from "src/auth/decorator";
import { GqlAuthGuard } from "src/auth/guard";
import { CompanyType, CreateCompanyArgs } from "./dto";
import { CompanyService } from "./company.service";
import { StoreType } from "src/store/dto";
import { StoreService } from "src/store/store.service";
import { CAEType } from "src/cae/dto";
import { CaeService } from "src/cae/cae.service";

@UseGuards(GqlAuthGuard)
@Resolver(() => CompanyType)
export class CompanyResolver {
  constructor(
    private companyService: CompanyService,
    private storeService: StoreService,
    private caeService: CaeService
  ) {}
  @Query(() => CompanyType, {
    nullable: true,
  })
  async getCompany(@Context("req") req) {
    return this.companyService.getCompany(req.tenantId);
  }
  @ResolveField(() => [StoreType])
  async stores(@Context("req") req, @Parent() company: CompanyType) {
    return this.storeService.getStores(req.client, company.id);
  }
  @ResolveField(() => CAEType)
  async cae(@Parent() company: CompanyType) {
    return this.caeService.getCAE(company.caeId);
  }
}
