import { Module } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { StoreService } from 'src/store/store.service';
import { CaeService } from 'src/cae/cae.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    CompanyResolver,
    CompanyService,
    PrismaService,
    AuthService,
    StoreService,
    CaeService,
  ],
})
export class CompanyModule {}
