"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorModule = void 0;
const common_1 = require("@nestjs/common");
const sector_resolver_1 = require("./sector.resolver");
const sector_service_1 = require("./sector.service");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_service_1 = require("../auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const service_service_1 = require("../service/service.service");
let SectorModule = class SectorModule {
};
exports.SectorModule = SectorModule;
exports.SectorModule = SectorModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({})],
        providers: [
            sector_resolver_1.SectorResolver,
            sector_service_1.SectorService,
            prisma_service_1.PrismaService,
            auth_service_1.AuthService,
            service_service_1.ServiceService,
        ],
    })
], SectorModule);
//# sourceMappingURL=sector.module.js.map