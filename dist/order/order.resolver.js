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
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const guard_1 = require("../auth/guard");
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const product_service_1 = require("../product/product.service");
const service_service_1 = require("../service/service.service");
const dto_2 = require("../product/dto");
const dto_3 = require("../service/dto");
let OrderResolver = class OrderResolver {
    constructor(orderService, productService, serviceService) {
        this.orderService = orderService;
        this.productService = productService;
        this.serviceService = serviceService;
    }
    async createOrder(req, data) {
        return this.orderService.createOrder(req.client, data);
    }
    async getOrders(req, saleId) {
        return this.orderService.getOrders(req.client, saleId);
    }
    async getOrder(req, id) {
        return this.orderService.getOrder(req.client, id);
    }
    async products(req, order) {
        return this.productService.getProductsByOrder(req.client, order.id);
    }
    async services(req, order) {
        return this.serviceService.getServicesByOrder(req.client, order.id);
    }
};
exports.OrderResolver = OrderResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.OrderType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.OrderType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("saleId", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrders", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.OrderType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrder", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_2.ProductType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.OrderType]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_3.ServiceType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.OrderType]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "services", null);
exports.OrderResolver = OrderResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.OrderType),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        product_service_1.ProductService,
        service_service_1.ServiceService])
], OrderResolver);
//# sourceMappingURL=order.resolver.js.map