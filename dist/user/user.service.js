"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
let UserService = class UserService {
    async createUserStore(prisma, userId, { password, ...dto }) {
        const hash = await argon.hash(password);
        const store = await prisma.store.findUnique({
            where: {
                id: dto.storeId,
                AND: {
                    company: {
                        AND: {
                            userId,
                        },
                    },
                },
            },
        });
        if (!store.id)
            throw new common_1.NotFoundException();
        return await prisma.user.create({
            data: {
                ...dto,
                hash,
                access: "SELLER",
            },
        });
    }
    async getUser(prisma, id) {
        return await prisma.user.findUnique({
            where: {
                id,
            },
        });
    }
    async getUsersByStory(prisma, storeId) {
        return await prisma.user.findMany({
            where: {
                storeId,
            },
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map