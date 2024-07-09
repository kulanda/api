import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/client';

type AccessGroup = 'SELLER' | 'OWNER' | 'MANAGER';

export const GetUser = createParamDecorator(
  (
    data:
      | keyof Omit<User, 'hash'>
      | {
          data?: string;
          access: AccessGroup[];
        }
      | undefined,
    ctx: ExecutionContext,
  ) => {
    const request = ctx.getArgByIndex(2).req;

    if (data && typeof data === 'string') {
      return request.user[data];
    }

    if (data && typeof data === 'object') {
      if (data.access && !data.access.includes(request.user.access)) {
        throw new UnauthorizedException(
          `You need a [${data.access.join(', ')}] access.`,
        );
      } else if (data.data) {
        return request.user[data.data];
      } else return request.user;
    }

    return request.user;
  },
);
