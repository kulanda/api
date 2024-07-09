import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthTokenType, SignUpArgs, SignInArgs } from './dto';
import { SignInWithPhoneArgs } from './dto/sign-in-with-phone.args';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthTokenType)
  signUp(@Args() data: SignUpArgs) {
    return this.authService.signUp(data);
  }

  @Mutation(() => AuthTokenType)
  signIn(@Args() data: SignInArgs) {
    return this.authService.signIn(data);
  }

  @Mutation(() => AuthTokenType)
  signInWithPhoneNumber(@Args() data: SignInWithPhoneArgs) {
    return this.authService.signInWithPhone(data);
  }
}
