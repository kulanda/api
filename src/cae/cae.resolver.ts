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
import { CAEType, CreateCAEArgs } from "./dto";
import { CaeService } from "./CAE.service";
import { SectorType } from "src/sector/dto";
import { SectorService } from "src/sector/sector.service";

@Resolver(() => CAEType)
export class CaeResolver {
  constructor(
    private cAEService: CaeService,
    private sectorService: SectorService
  ) {}
  @Mutation(() => CAEType)
  async createCAE(@Args() data: CreateCAEArgs) {
    return this.cAEService.createCAE(data);
  }
  @Query(() => [CAEType])
  async getCAEs() {
    return this.cAEService.getCAEs();
  }
  @Query(() => CAEType, {
    nullable: true,
  })
  async getCAE(@Args("id", { type: () => ID }) id: string) {
    return this.cAEService.getCAE(id);
  }
  @ResolveField(() => SectorType)
  async sector(@Parent() cae: CAEType) {
    return this.sectorService.getSector(cae.sectorId);
  }
}
