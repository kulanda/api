import { AuthService } from "./auth.service";
import { AuthTokenType, SignUpArgs, SignInArgs } from "./dto";
import { SignInWithPhoneArgs } from "./dto/sign-in-with-phone.args";
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    signUp(req: any, data: SignUpArgs): Promise<AuthTokenType>;
    signIn(req: any, data: SignInArgs): Promise<AuthTokenType>;
    signInWithPhoneNumber(req: any, data: SignInWithPhoneArgs): Promise<AuthTokenType>;
}
