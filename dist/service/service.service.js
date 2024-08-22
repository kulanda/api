"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs_1 = require("fs");
let ServiceService = class ServiceService {
    async createService(prisma, tenantId, { categoryId, storeId, charges, ...dto }) {
        const dirPath = (0, path_1.join)("uploads/images/" + tenantId);
        const imageURL = `${dirPath}/${dto?.image?.filename}`;
        if (!(0, fs_1.existsSync)(dirPath)) {
            (0, fs_1.mkdirSync)(dirPath, { recursive: true });
        }
        dto?.image?.createReadStream?.()?.pipe?.((0, fs_1.createWriteStream)(imageURL));
        return await prisma.service.create({
            data: {
                image: dto?.image ? imageURL : undefined,
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
    async editService(prisma, tenantId, id, { charges, ...dto }) {
        let imageURL = "";
        if (dto?.image) {
            const dirPath = (0, path_1.join)("uploads/images/" + tenantId);
            imageURL = `${dirPath}/${dto?.image?.filename}`;
            if (!(0, fs_1.existsSync)(dirPath)) {
                (0, fs_1.mkdirSync)(dirPath, { recursive: true });
            }
            dto?.image?.createReadStream?.()?.pipe?.((0, fs_1.createWriteStream)(imageURL));
        }
        return await prisma.service.update({
            data: {
                image: dto?.image ? imageURL : undefined,
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
    async getServices(prisma, storeId, filter) {
        const where = {
            storeId,
            categoryId: filter.categoryId,
            name: {
                contains: filter.name,
            },
        };
        if (filter.paginate)
            return await prisma.service.findMany({
                skip: (filter.paginate.page - 1) * filter.paginate.limit,
                take: filter.paginate.limit,
                where,
            });
        else
            return await prisma.service.findMany({
                where,
            });
    }
    async getServicesByOrder(prisma, orderId) {
        return await prisma.service.findMany({
            where: {
                Order: {
                    some: {
                        id: orderId,
                    },
                },
            },
        });
    }
    async getService(prisma, id) {
        return await prisma.service.findUnique({
            where: {
                id,
            },
        });
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)()
], ServiceService);
//# sourceMappingURL=service.service.js.map