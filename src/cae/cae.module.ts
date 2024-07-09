import { Module } from '@nestjs/common';
import { CaeService } from './CAE.service';
import { CaeResolver } from './CAE.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [CaeService, CaeResolver, PrismaService, AuthService],
})
export class CaeModule {}
