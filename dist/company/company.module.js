"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const company_resolver_1 = require("./company.resolver");
const company_service_1 = require("./company.service");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_service_1 = require("../auth/auth.service");
const store_service_1 = require("../store/store.service");
const cae_service_1 = require("../cae/cae.service");
let CompanyModule = class CompanyModule {
};
exports.CompanyModule = CompanyModule;
exports.CompanyModule = CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({})],
        providers: [
            company_resolver_1.CompanyResolver,
            company_service_1.CompanyService,
            prisma_service_1.PrismaService,
            auth_service_1.AuthService,
            store_service_1.StoreService,
            cae_service_1.CaeService,
        ],
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map