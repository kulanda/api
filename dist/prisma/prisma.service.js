"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor(configService) {
        super();
        this.configService = configService;
        this.clients = {};
    }
    async getClient(request) {
        const tenantId = this.extractTenantIdFromRequest(request);
        let client = this.clients[tenantId];
        if (!client) {
            const databaseUrl = this.configService
                .get("DATABASE_URL")
                .replace("public", tenantId);
            client = new client_1.PrismaClient({
                datasources: {
                    db: {
                        url: databaseUrl,
                    },
                },
            });
            this.clients[tenantId] = client;
        }
        return client;
    }
    extractTenantIdFromRequest(request) {
        return request.headers["x-tenant-id"] || "public";
    }
    async onModuleDestroy() {
        for (const client of Object.values(this.clients)) {
            await client.$disconnect();
        }
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map