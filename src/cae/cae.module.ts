import { Module } from "@nestjs/common";
import { CaeService } from "./cae.service";
import { CaeResolver } from "./cae.resolver";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { SectorService } from "src/sector/sector.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [
    CaeService,
    CaeResolver,
    PrismaService,
    AuthService,
    SectorService,
  ],
})
export class CaeModule {}
