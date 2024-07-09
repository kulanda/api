import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthTokenType, SignInArgs, SignUpArgs } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInWithPhoneArgs } from './dto/sign-in-with-phone.args';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signUp(dto: SignUpArgs): Promise<AuthTokenType> {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          fullName: dto.fullName,
          username: dto.username,
          phone: dto.phone,
          hash,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentias taken');
        }
      }
      throw error;
    }
  }

  async signIn(dto: SignInArgs): Promise<AuthTokenType> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('Credrentials incorrect');

    const pwMacthes = await argon.verify(user.hash, dto.password);

    if (!pwMacthes) throw new ForbiddenException('Credrentials incorrect');
    return this.signToken(user.id, user.email);
  }

  async signInWithPhone(dto: SignInWithPhoneArgs): Promise<AuthTokenType> {
    const user = await this.prisma.user.findUnique({
      where: {
        phone: dto.phone,
      },
    });

    if (!user) throw new ForbiddenException('Credrentials incorrect');

    const pwMacthes = await argon.verify(user.hash, dto.password);

    if (!pwMacthes) throw new ForbiddenException('Credrentials incorrect');
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  async validateToken(token: string): Promise<any> {
    try {
      const decoded = this.jwt.verify(token, {
        secret: this.config.get('JWT_SECRET'),
      });
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });
      return user;
    } catch (err) {
      return null;
    }
  }
}
