"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
let CompanyService = class CompanyService {
    async createCompany(prisma, { caeId, tenantId, ...dto }) {
        return await prisma.company.create({
            data: {
                ...dto,
                cae: {
                    connect: {
                        id: caeId,
                    },
                },
                tenant: {
                    connect: {
                        id: tenantId,
                    },
                },
            },
        });
    }
    async getCompanies(prisma, tenantId) {
        return await prisma.company.findMany({
            where: {
                tenantId,
            },
        });
    }
    async getCompany(prisma, id) {
        return await prisma.company.findUnique({
            where: {
                id,
            },
        });
    }
    async getCompanyByTenant(prisma, tenantId) {
        return await prisma.company.findFirst({
            where: {
                tenant: {
                    id: tenantId,
                },
            },
        });
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)()
], CompanyService);
//# sourceMappingURL=company.service.js.map