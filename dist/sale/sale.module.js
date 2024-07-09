"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModule = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
const sale_resolver_1 = require("./sale.resolver");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_service_1 = require("../auth/auth.service");
const user_service_1 = require("../user/user.service");
const order_service_1 = require("../order/order.service");
let SaleModule = class SaleModule {
};
exports.SaleModule = SaleModule;
exports.SaleModule = SaleModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({})],
        providers: [
            sale_service_1.SaleService,
            sale_resolver_1.SaleResolver,
            prisma_service_1.PrismaService,
            auth_service_1.AuthService,
            user_service_1.UserService,
            order_service_1.OrderService,
        ],
    })
], SaleModule);
//# sourceMappingURL=sale.module.js.map