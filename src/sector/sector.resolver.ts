import { Args, Context, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SectorType, CreateSectorArgs } from "./dto";
import { SectorService } from "./sector.service";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/auth/guard";

@UseGuards(GqlAuthGuard)
@Resolver(() => SectorType)
export class SectorResolver {
  constructor(private sectorService: SectorService) {}
  @Mutation(() => SectorType)
  async createSector(@Context("req") req, @Args() data: CreateSectorArgs) {
    return this.sectorService.createSector(req.client, data);
  }
  @Query(() => [SectorType])
  async getSectors(@Context("req") req) {
    return this.sectorService.getCategories(req.client);
  }
  @Query(() => SectorType, {
    nullable: true,
  })
  async getSector(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.sectorService.getSector(req.client, id);
  }
}
