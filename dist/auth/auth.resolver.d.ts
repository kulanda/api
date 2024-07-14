import { AuthService } from "./auth.service";
import { AuthTokenType, SignUpArgs, SignInArgs } from "./dto";
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    signUp(req: any, data: SignUpArgs): Promise<AuthTokenType>;
    signIn(req: any, data: SignInArgs): Promise<AuthTokenType>;
}
