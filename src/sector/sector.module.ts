import { Module } from '@nestjs/common';
import { SectorResolver } from './sector.resolver';
import { SectorService } from './sector.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ServiceService } from 'src/service/service.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    SectorResolver,
    SectorService,
    PrismaService,
    AuthService,
    ServiceService,
  ],
})
export class SectorModule {}
