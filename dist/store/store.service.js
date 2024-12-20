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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StoreService = class StoreService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createStore(prisma, companyId, dto) {
        const company = await this.prismaService.company.findFirst({
            where: {
                id: companyId,
            },
        });
        let Charge = undefined;
        if (company.vatRegime === "GENERAL_REGIME")
            Charge = {
                create: [
                    {
                        name: "Imposto sobre o valor acrescentado",
                        acronym: "IVA",
                        percentage: 14,
                        type: "TAX",
                    },
                ],
            };
        return await prisma.store.create({
            data: {
                address: dto.address,
                designation: dto.designation,
                phone: dto.phone,
                saleType: dto.saleType,
                companyId,
                Charge: Charge,
            },
        });
    }
    async getStores(prisma, companyId) {
        return await prisma.store.findMany({
            where: {
                companyId,
            },
        });
    }
    async getStore(prisma, id) {
        return await prisma.store.findUnique({
            where: {
                id,
            },
        });
    }
    async getStoreReport(prisma, id, options) {
        let dateFilter = {};
        let totalSalesBalance = 0;
        const currentDate = new Date(options.from);
        if (options) {
            switch (options.period) {
                case "DAY":
                    dateFilter = {
                        gte: new Date(currentDate.setUTCHours(0, 0, 0, 0)),
                        lt: new Date(currentDate.setUTCHours(24, 0, 0, 0)),
                    };
                    break;
                case "WEEK":
                    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
                    startOfWeek.setUTCHours(0, 0, 0, 0);
                    const endOfWeek = new Date(startOfWeek);
                    endOfWeek.setDate(startOfWeek.getDate() + 7);
                    dateFilter = {
                        gte: startOfWeek,
                        lt: endOfWeek,
                    };
                    break;
                case "MONTH":
                    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
                    dateFilter = {
                        gte: startOfMonth,
                        lt: endOfMonth,
                    };
                    break;
                case "YEAR":
                    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
                    const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1);
                    dateFilter = {
                        gte: startOfYear,
                        lt: endOfYear,
                    };
                    break;
                default:
                    break;
            }
        }
        const where = {
            Order: {
                some: {
                    OR: [
                        {
                            product: {
                                storeId: id,
                            },
                        },
                        {
                            service: {
                                storeId: id,
                            },
                        },
                    ],
                },
            },
            sellerId: options.sellerId,
            createdAt: dateFilter,
        };
        const sales = await prisma.sale.findMany({
            where,
            include: {
                Order: {
                    include: {
                        product: true,
                        service: true,
                    },
                },
            },
        });
        sales.forEach(({ Order }) => {
            Order.forEach(({ product, service }) => {
                if (product)
                    totalSalesBalance = totalSalesBalance + Number(product.price);
                if (service)
                    totalSalesBalance = totalSalesBalance + Number(service.price);
            });
        });
        return {
            sales: sales,
            totalSales: sales.length,
            totalSalesBalance,
        };
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StoreService);
//# sourceMappingURL=store.service.js.map