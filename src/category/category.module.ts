import { Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ServiceService } from 'src/service/service.service';
import { ChargeService } from 'src/charge/charge.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    CategoryResolver,
    CategoryService,
    PrismaService,
    AuthService,
    ServiceService,
    ChargeService
  ],
})
export class CategoryModule {}
