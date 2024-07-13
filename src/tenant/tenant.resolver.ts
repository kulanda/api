import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  Resolver,
} from "@nestjs/graphql";
import { CreateTenantArgs, TenantType } from "./dto";
import { TenantService } from "./tenant.service";
import { CompanyService } from "src/company/company.service";
import { PrismaClient } from "@prisma/client";

@Resolver(() => TenantType)
export class TenantResolver {
  constructor(
    private tenantService: TenantService,
    private companyService: CompanyService
  ) {}

  @Query(() => String)
  async test(@Context("req") req) {
    const client: PrismaClient = req.client;
    
    console.log(await client.user.findMany());
    
    return "ola";
  }

  @Mutation(() => TenantType)
  async createTenant(@Args() data: CreateTenantArgs) {
    return await this.tenantService.createTenant(data);
  }
  @Mutation(() => TenantType, {
    nullable: true,
  })
  company(@Context("req") req, @Parent() tenant: TenantType) {
    return this.companyService.getCompanyByTenant(req.client, tenant.id);
  }
}
