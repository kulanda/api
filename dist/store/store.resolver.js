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
exports.StoreResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const store_service_1 = require("./store.service");
const dto_2 = require("../product/dto");
const product_service_1 = require("../product/product.service");
const user_service_1 = require("../user/user.service");
const dto_3 = require("../user/dto");
const dto_4 = require("../sale/dto");
const sale_service_1 = require("../sale/sale.service");
const report_store_options_input_1 = require("./dto/report-store-options.input");
let StoreResolver = class StoreResolver {
    constructor(storeService, productService, userService, saleService) {
        this.storeService = storeService;
        this.productService = productService;
        this.userService = userService;
        this.saleService = saleService;
    }
    async createStore(req, data) {
        return this.storeService.createStore(req.client, req.companyId, data);
    }
    async getStores(req) {
        return this.storeService.getStores(req.client, req.companyId);
    }
    async getStore(req, id) {
        return this.storeService.getStore(req.client, id);
    }
    async getStoreReport(req, id, options) {
        return this.storeService.getStoreReport(req.client, id, options);
    }
    async products(req, store) {
        return this.productService.getProducts(req.client, store.id);
    }
    async sellers(req, store) {
        return this.userService.getUsersByStory(req.client, store.id);
    }
    async sales(req, store) {
        return this.saleService.getSales(req.client, store.id);
    }
};
exports.StoreResolver = StoreResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.StoreType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateStoreArgs]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "createStore", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.StoreType]),
    __param(0, (0, graphql_1.Context)("req")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "getStores", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.StoreType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "getStore", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.ReportStoreType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __param(2, (0, graphql_1.Args)("options", { type: () => report_store_options_input_1.ReportStoreOptionsInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, report_store_options_input_1.ReportStoreOptionsInput]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "getStoreReport", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_2.ProductType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.StoreType]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_3.UserType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.StoreType]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "sellers", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_4.SaleType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.StoreType]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "sales", null);
exports.StoreResolver = StoreResolver = __decorate([
    (0, graphql_1.Resolver)(() => dto_1.StoreType),
    __metadata("design:paramtypes", [store_service_1.StoreService,
        product_service_1.ProductService,
        user_service_1.UserService,
        sale_service_1.SaleService])
], StoreResolver);
//# sourceMappingURL=store.resolver.js.map