import { UseGuards } from "@nestjs/common";
import { Args, Context, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "src/auth/guard";
import { ClientType, CreateClientArgs } from "./dto";
import { ClientService } from "./client.service";

@UseGuards(GqlAuthGuard)
@Resolver(() => ClientType)
export class ClientResolver {
  constructor(private clientService: ClientService) {}
  @Mutation(() => ClientType)
  async createClient(@Context("req") req, @Args() data: CreateClientArgs) {
    return this.clientService.createClient(req.client, data);
  }
  @Query(() => [ClientType])
  async getClients(@Context("req") req) {
    return this.clientService.getClients(req.client);
  }
  @Query(() => ClientType, {
    nullable: true,
  })
  async getClient(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.clientService.getClient(req.client, id);
  }
  @Query(() => [ClientType], {
    nullable: true,
  })
  async getClientsByStore(
    @Context("req") req,
    @Args("storeId", { type: () => ID }) storeId: string
  ) {
    return this.clientService.getClientsByStore(req.client, storeId);
  }
}
