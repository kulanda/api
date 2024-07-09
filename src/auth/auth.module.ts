import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Global()
@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, AuthResolver, PrismaService],
})
export class AuthModule {}
