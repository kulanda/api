"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
let SaleService = class SaleService {
    async createSale(prisma, sellerId, { orders, bankCard, cash, change, totalPrice }) {
        const lastSale = await prisma.sale.findFirst({
            orderBy: {
                code: "desc",
            },
        });
        return await prisma.sale.create({
            data: {
                cash,
                bankCard,
                change,
                totalPrice,
                code: (lastSale.code ?? 0) + 1,
                seller: {
                    connect: {
                        id: sellerId,
                    },
                },
                Order: {
                    createMany: {
                        data: orders,
                    },
                },
            },
        });
    }
    async getSales(prisma, storeId) {
        return await prisma.sale.findMany({
            where: {
                seller: {
                    storeId,
                },
            },
        });
    }
    async getSale(prisma, id) {
        return await prisma.sale.findUnique({
            where: {
                id,
            },
        });
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)()
], SaleService);
//# sourceMappingURL=sale.service.js.map