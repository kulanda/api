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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const guard_1 = require("../auth/guard");
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
const user_service_1 = require("../user/user.service");
const order_service_1 = require("../order/order.service");
const dto_2 = require("../user/dto");
const dto_3 = require("../order/dto");
const decorator_1 = require("../auth/decorator");
let SaleResolver = class SaleResolver {
    constructor(saleService, orderService, sellerService) {
        this.saleService = saleService;
        this.orderService = orderService;
        this.sellerService = sellerService;
    }
    async createSale(sellerId, data) {
        return this.saleService.createSale(sellerId, data);
    }
    async getSales(storeId) {
        return this.saleService.getSales(storeId);
    }
    async getSale(id) {
        return this.saleService.getSale(id);
    }
    async orders(sale) {
        return this.orderService.getOrders(sale.id);
    }
    async seller(sale) {
        return this.sellerService.getUser(sale.sellerId);
    }
};
exports.SaleResolver = SaleResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.SaleType),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateSaleArgs]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "createSale", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.SaleType]),
    __param(0, (0, graphql_1.Args)('storeId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "getSales", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.SaleType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "getSale", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_3.OrderType]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SaleType]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "orders", null);
__decorate([
    (0, graphql_1.ResolveField)(() => dto_2.UserType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SaleType]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "seller", null);
exports.SaleResolver = SaleResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.SaleType),
    __metadata("design:paramtypes", [sale_service_1.SaleService,
        order_service_1.OrderService,
        user_service_1.UserService])
], SaleResolver);
//# sourceMappingURL=sale.resolver.js.map