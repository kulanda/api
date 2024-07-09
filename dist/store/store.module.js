"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModule = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("./store.service");
const store_resolver_1 = require("./store.resolver");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_service_1 = require("../auth/auth.service");
const product_service_1 = require("../product/product.service");
const user_service_1 = require("../user/user.service");
const sale_service_1 = require("../sale/sale.service");
let StoreModule = class StoreModule {
};
exports.StoreModule = StoreModule;
exports.StoreModule = StoreModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({})],
        providers: [
            store_service_1.StoreService,
            store_resolver_1.StoreResolver,
            prisma_service_1.PrismaService,
            auth_service_1.AuthService,
            product_service_1.ProductService,
            user_service_1.UserService,
            sale_service_1.SaleService,
        ],
    })
], StoreModule);
//# sourceMappingURL=store.module.js.map