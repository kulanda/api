import { User } from "@prisma/client";
import { AccessEnumType } from "src/user/dto";
export declare class SignUpArgs implements Pick<User, "access"> {
    fullName: string;
    username?: string;
    email: string;
    phone?: string;
    access: keyof typeof AccessEnumType;
    storeId: string;
    password: string;
}
