import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { CompanyService } from 'src/company/company.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    UserService,
    UserResolver,
    PrismaService,
    AuthService,
    CompanyService,
  ],
})
export class UserModule {}
