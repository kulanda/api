import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServiceService } from './service.service';
import { ServiceResolver } from './service.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { CategoryService } from 'src/category/category.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    ServiceService,
    PrismaService,
    AuthService,
    CategoryService,
    ServiceResolver,
  ],
})
export class ServiceModule {}
