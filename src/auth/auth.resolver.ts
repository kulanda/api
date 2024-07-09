import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { AuthTokenType, SignUpArgs, SignInArgs } from "./dto";
import { SignInWithPhoneArgs } from "./dto/sign-in-with-phone.args";

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthTokenType)
  signUp(@Context("req") req, @Args() data: SignUpArgs) {
    return this.authService.signUp(req.client, data);
  }

  @Mutation(() => AuthTokenType)
  signIn(@Context("req") req, @Args() data: SignInArgs) {
    return this.authService.signIn(req.client, data);
  }

  @Mutation(() => AuthTokenType)
  signInWithPhoneNumber(
    @Context("req") req,
    @Args() data: SignInWithPhoneArgs
  ) {
    return this.authService.signInWithPhone(req.client, data);
  }
}
