import { UseGuards } from "@nestjs/common";
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
import { GetUser } from "src/auth/decorator";
import { GqlAuthGuard } from "src/auth/guard";
import { CreateUserStoreArgs, UserType } from "./dto";
import { CompanyType } from "src/company/dto";
import { CompanyService } from "src/company/company.service";
import { UserService } from "./user.service";

@UseGuards(GqlAuthGuard)
@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserType)
  async user(@Context("req") req, @GetUser() user) {
    return this.userService.getUser(req.client, user.id);
  }
  @Query(() => UserType)
  async getUser(
    @Context("req") req,
    @Args("id", { type: () => ID }) id: string
  ) {
    return this.userService.getUser(req.client, id);
  }
  @Query(() => [UserType])
  async getUsers(
    @Context("req") req,
    @Args("storeId", { type: () => ID, nullable: true }) storeId: string
  ) {
    return this.userService.getUsers(req.client, storeId);
  }
}
