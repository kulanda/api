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
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const guard_1 = require("../auth/guard");
const common_1 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const product_service_1 = require("./product.service");
const category_service_1 = require("../category/category.service");
const dto_2 = require("../category/dto");
let ProductResolver = class ProductResolver {
    constructor(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }
    async createProduct(_, data) {
        return this.productService.createProduct(data);
    }
    async editProduct(_, id, data) {
        return this.productService.editProduct(id, data);
    }
    async getProducts(storeId, filter) {
        return this.productService.getProducts(storeId, filter);
    }
    async getProduct(id) {
        return this.productService.getProduct(id);
    }
    async category(product) {
        return this.categoryService.getCategory(product.categoryId);
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.ProductType),
    __param(0, (0, decorator_1.GetUser)({
        access: ['OWNER', 'MANAGER'],
    })),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateProductArgs]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.ProductType),
    __param(0, (0, decorator_1.GetUser)({
        access: ['OWNER', 'MANAGER'],
    })),
    __param(1, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, dto_1.EditProductArgs]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "editProduct", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.ProductType]),
    __param(0, (0, graphql_1.Args)('storeId', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('filter', { type: () => dto_1.FilterProductInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.FilterProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.ProductType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
__decorate([
    (0, graphql_1.ResolveField)(() => dto_2.CategoryType),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ProductType]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "category", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.ProductType),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        category_service_1.CategoryService])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map