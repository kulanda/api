"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
let CategoryService = class CategoryService {
    async createCategory(prisma, { charges, ...dto }) {
        return await prisma.category.create({
            data: {
                ...dto,
                Charge: {
                    connect: charges.map((id) => ({
                        id,
                    })),
                },
            },
        });
    }
    async getCategories(prisma) {
        return await prisma.category.findMany();
    }
    async getCategory(prisma, id) {
        return await prisma.category.findUnique({
            where: {
                id,
            },
        });
    }
    async getCategoriesByStore(prisma, storeId) {
        return await prisma.category.findMany({
            where: {
                Service: {
                    every: {
                        storeId,
                    },
                },
                Product: {
                    every: {
                        storeId,
                    },
                },
            },
        });
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)()
], CategoryService);
//# sourceMappingURL=category.service.js.map