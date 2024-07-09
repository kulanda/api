import { UseGuards } from '@nestjs/common';
import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GetUser } from 'src/auth/decorator';
import { GqlAuthGuard } from 'src/auth/guard';
import { CreateUserStoreArgs, UserType } from './dto';
import { CompanyType } from 'src/company/dto';
import { CompanyService } from 'src/company/company.service';
import { UserService } from './user.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => UserType)
export class UserResolver {
  constructor(
    private companyService: CompanyService,
    private userService: UserService,
  ) {}

  @Mutation(() => UserType)
  createUserStore(
    @GetUser({
      data: 'id',
      access: ['OWNER'],
    })
    userId: string,
    @Args() data: CreateUserStoreArgs,
  ) {
    return this.userService.createUserStore(userId, data);
  }
  @Query(() => UserType)
  async user(@GetUser() user: string) {
    return user;
  }
  @Query(() => UserType)
  async getUser(@Args('id', { type: () => ID }) id: string) {
    return this.userService.getUser(id);
  }
  @ResolveField(() => [CompanyType])
  async companies(
    @GetUser({
      data: 'id',
      access: ['OWNER'],
    })
    _: string,
    @Parent() user: UserType,
  ) {
    return this.companyService.getCompanies(user.id);
  }
}
