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
import { CaeService } from "src/cae/CAE.service";

@UseGuards(GqlAuthGuard)
@Resolver(() => CompanyType)
export class CompanyResolver {
  constructor(
    private companyService: CompanyService,
    private storeService: StoreService,
    private caeService: CaeService
  ) {}
  @Mutation(() => CompanyType)
  async createCompany(
    @Context("req") req,
    @GetUser({
      data: "id",
      access: ["OWNER"],
    })
    userId: string,
    @Args() data: CreateCompanyArgs
  ) {
    return this.companyService.createCompany(req.client, userId, data);
  }
  @Query(() => [CompanyType])
  async getCompanies(
    @Context("req") req,
    @GetUser({
      data: "id",
      access: ["OWNER"],
    })
    userId: string
  ) {
    return this.companyService.getCompanies(req.client, userId);
  }
  @Query(() => CompanyType, {
    nullable: true,
  })
  async getCompany(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.companyService.getCompany(req.client, id);
  }
  @ResolveField(() => [StoreType])
  async stores(@Context("req") req, @Parent() company: CompanyType) {
    return this.storeService.getStores(req.client, company.id);
  }
  @ResolveField(() => CAEType)
  async cae(@Context("req") req, @Parent() company: CompanyType) {
    return this.caeService.getCAE(req.client, company.caeId);
  }
}
