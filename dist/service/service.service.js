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
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServiceService = class ServiceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createService({ categoryId, storeId, ...dto }) {
        return await this.prisma.service.create({
            data: {
                ...dto,
                store: {
                    connect: {
                        id: storeId,
                    },
                },
                category: {
                    connect: {
                        id: categoryId,
                    },
                },
            },
        });
    }
    async editService(id, dto) {
        return await this.prisma.service.update({
            data: {
                ...dto,
            },
            where: {
                id,
            },
        });
    }
    async getServices(storeId, filter) {
        const where = {
            storeId,
            categoryId: filter.categoryId,
            name: {
                contains: filter.name,
            },
        };
        if (filter.paginate)
            return await this.prisma.service.findMany({
                skip: (filter.paginate.page - 1) * filter.paginate.limit,
                take: filter.paginate.limit,
                where,
            });
        else
            return await this.prisma.service.findMany({
                where,
            });
    }
    async getServicesByOrder(orderId) {
        return await this.prisma.service.findMany({
            where: {
                Order: {
                    some: {
                        id: orderId,
                    },
                },
            },
        });
    }
    async getService(id) {
        return await this.prisma.service.findUnique({
            where: {
                id,
            },
        });
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiceService);
//# sourceMappingURL=service.service.js.map