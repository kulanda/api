import { Module } from "@nestjs/common";
import { SupplierResolver } from "./supplier.resolver";
import { SupplierService } from "./supplier.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [JwtModule.register({})],
  providers: [SupplierResolver, SupplierService, AuthService, PrismaService],
})
export class SupplierModule {}
