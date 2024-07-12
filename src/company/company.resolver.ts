import {
  Args,
  Context,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { CompanyType, CreateCompanyArgs } from "./dto";
import { CompanyService } from "./company.service";
import { CAEType } from "src/cae/dto";
import { CaeService } from "src/cae/CAE.service";

@Resolver(() => CompanyType)
export class CompanyResolver {
  constructor(
    private companyService: CompanyService,
    private caeService: CaeService
  ) {}
  @Mutation(() => CompanyType)
  async createCompany(@Context("req") req, @Args() data: CreateCompanyArgs) {
    return this.companyService.createCompany(req.clien, data);
  }
  @ResolveField(() => CAEType)
  async cae(@Context("req") req, @Parent() company: CompanyType) {
    return this.caeService.getCAE(req.client, company.caeId);
  }
}
