import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
