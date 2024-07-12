import { Args, Context, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CAEType, CreateCAEArgs } from "./dto";
import { CaeService } from "./CAE.service";

@Resolver(() => CAEType)
export class CaeResolver {
  constructor(private cAEService: CaeService) {}
  @Mutation(() => CAEType)
  async createCAE(@Context("req") req, @Args() data: CreateCAEArgs) {
    return this.cAEService.createCAE(req.client, data);
  }
  @Query(() => [CAEType])
  async getCategories(@Context("req") req) {
    return this.cAEService.getCategories(req.client);
  }
  @Query(() => CAEType, {
    nullable: true,
  })
  async getCAE(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.cAEService.getCAE(req.client, id);
  }
}
