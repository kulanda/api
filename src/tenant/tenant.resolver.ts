import {
  Args,
  Mutation,
  Resolver,
} from "@nestjs/graphql";
import { CreateTenantArgs, TenantType } from "./dto";
import { TenantService } from "./tenant.service";
import { TenantCredentialsType } from "./dto/tenant-credentials.type";

@Resolver(() => TenantType)
export class TenantResolver {
  constructor(
    private tenantService: TenantService,
  ) {}
  @Mutation(() => TenantCredentialsType)
  async createTenant(@Args() data: CreateTenantArgs) {
    return await this.tenantService.createTenant(data);
  }
}
