"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    async createProduct(prisma, { categoryId, storeId, charges, ...dto }) {
        return await prisma.product.create({
            data: {
                ...dto,
                Charge: {
                    connect: charges.map((id) => ({
                        id,
                    })),
                },
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
    async editProduct(prisma, id, { charges, ...dto }) {
        return await prisma.product.update({
            data: {
                ...dto,
                Charge: {
                    connect: charges.map((id) => ({
                        id,
                    })),
                },
            },
            where: {
                id,
            },
        });
    }
    async getProducts(prisma, storeId, filter) {
        const where = {
            storeId,
            categoryId: filter?.categoryId,
            name: {
                contains: filter?.name,
                mode: "insensitive",
            },
        };
        if (filter?.paginate)
            return await prisma.product.findMany({
                skip: (filter.paginate.page - 1) * filter.paginate.limit,
                take: filter.paginate.limit,
                where,
            });
        else
            return await prisma.product.findMany({
                where,
            });
    }
    async getProductsByOrder(prisma, orderId) {
        return await prisma.product.findMany({
            where: {
                Order: {
                    some: {
                        id: orderId,
                    },
                },
            },
        });
    }
    async getProduct(prisma, id) {
        return await prisma.product.findUnique({
            where: {
                id,
            },
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
//# sourceMappingURL=product.service.js.map