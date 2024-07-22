import { Module } from "@nestjs/common";
import { ClientResolver } from "./client.resolver";
import { ClientService } from "./client.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [ClientResolver, ClientService, AuthService, PrismaService],
})
export class ClientModule {}
