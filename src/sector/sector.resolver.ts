import { Args, Context, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SectorType, CreateSectorArgs } from "./dto";
import { SectorService } from "./sector.service";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/auth/guard";

@Resolver(() => SectorType)
export class SectorResolver {
  constructor(private sectorService: SectorService) {}
  @Mutation(() => SectorType)
  async createSector(@Args() data: CreateSectorArgs) {
    return this.sectorService.createSector(data);
  }
  @Query(() => [SectorType])
  async getSectors() {
    return this.sectorService.getCategories();
  }
  @Query(() => SectorType, {
    nullable: true,
  })
  async getSector(
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.sectorService.getSector( id);
  }
}
