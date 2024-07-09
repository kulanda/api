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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createProduct({ categoryId, storeId, ...dto }) {
        return await this.prisma.product.create({
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
    async editProduct(id, dto) {
        return await this.prisma.product.update({
            data: {
                ...dto,
            },
            where: {
                id,
            },
        });
    }
    async getProducts(storeId, filter) {
        const where = {
            storeId,
            categoryId: filter?.categoryId,
            name: {
                contains: filter?.name,
                mode: 'insensitive',
            },
        };
        if (filter?.paginate)
            return await this.prisma.product.findMany({
                skip: (filter.paginate.page - 1) * filter.paginate.limit,
                take: filter.paginate.limit,
                where,
            });
        else
            return await this.prisma.product.findMany({
                where,
            });
    }
    async getProductsByOrder(orderId) {
        return await this.prisma.product.findMany({
            where: {
                Order: {
                    some: {
                        id: orderId,
                    },
                },
            },
        });
    }
    async getProduct(id) {
        return await this.prisma.product.findUnique({
            where: {
                id,
            },
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map