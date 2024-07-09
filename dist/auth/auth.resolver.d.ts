import { AuthService } from './auth.service';
import { AuthTokenType, SignUpArgs, SignInArgs } from './dto';
import { SignInWithPhoneArgs } from './dto/sign-in-with-phone.args';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    signUp(data: SignUpArgs): Promise<AuthTokenType>;
    signIn(data: SignInArgs): Promise<AuthTokenType>;
    signInWithPhoneNumber(data: SignInWithPhoneArgs): Promise<AuthTokenType>;
}
