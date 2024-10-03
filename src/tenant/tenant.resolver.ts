import {
  Args,
  Mutation,
  Resolver,
} from "@nestjs/graphql";
import { CreateTenantArgs, TenantType } from "./dto";
import { TenantService } from "./tenant.service";
import { TenantCredentialsType } from "./dto/tenant-credentials.type";
import { GraphQLUpload } from "graphql-upload-ts";

@Resolver(() => TenantType)
export class TenantResolver {
  constructor(
    private tenantService: TenantService,
  ) {}
  @Mutation(() => TenantCredentialsType)
  async createTenant(@Args({ name: 'logo', type: () => GraphQLUpload, nullable: true })
  logo: any,@Args() data: CreateTenantArgs) {
    return await this.tenantService.createTenant(logo, data);
  }
}
