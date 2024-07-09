import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CAEType, CreateCAEArgs } from './dto';
import { CaeService } from './CAE.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CAEType)
export class CaeResolver {
  constructor(private cAEService: CaeService) {}
  @Mutation(() => CAEType)
  async createCAE(@Args() data: CreateCAEArgs) {
    return this.cAEService.createCAE(data);
  }
  @Query(() => [CAEType])
  async getCategories() {
    return this.cAEService.getCategories();
  }
  @Query(() => CAEType, {
    nullable: true,
  })
  async getCAE(@Args('id', { type: () => ID }) id: string) {
    return this.cAEService.getCAE(id);
  }
}
