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
const dto_3 = require("../charge/dto");
const charge_service_1 = require("../charge/charge.service");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const suppliers_on_product_service_1 = require("../suppliersOnProduct/suppliers-on-product.service");
const dto_4 = require("../suppliersOnProduct/dto");
let ProductResolver = class ProductResolver {
    constructor(productService, categoryService, chargeService, supplierOnProductService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.chargeService = chargeService;
        this.supplierOnProductService = supplierOnProductService;
    }
    async createProduct(req, _, image, data) {
        return this.productService.createProduct(req.client, req.tenantId, image, data);
    }
    async editProduct(req, _, id, data) {
        return this.productService.editProduct(req.client, req.tenantId, id, data);
    }
    async getProducts(req, storeId, filter) {
        return this.productService.getProducts(req.client, storeId, filter);
    }
    async getProduct(req, id) {
        return this.productService.getProduct(req.client, id);
    }
    async category(req, product) {
        return this.categoryService.getCategory(req.client, product.categoryId);
    }
    async charges(req, product) {
        return this.chargeService.getCharges(req.client, {
            productId: product.id,
        });
    }
    async stock(req, product) {
        return this.supplierOnProductService.getSupplierOnProductByProductId(req.client, product.id);
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.ProductType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, decorator_1.GetUser)({
        access: ["OWNER", "MANAGER"],
    })),
    __param(2, (0, graphql_1.Args)({ name: "image", type: () => graphql_upload_ts_1.GraphQLUpload, nullable: true })),
    __param(3, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, dto_1.CreateProductArgs]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.ProductType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, decorator_1.GetUser)({
        access: ["OWNER", "MANAGER"],
    })),
    __param(2, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __param(3, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, dto_1.EditProductArgs]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "editProduct", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.ProductType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("storeId", { type: () => graphql_1.ID })),
    __param(2, (0, graphql_1.Args)("filter", { type: () => dto_1.FilterProductInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.FilterProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.ProductType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
__decorate([
    (0, graphql_1.ResolveField)(() => dto_2.CategoryType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ProductType]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "category", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_3.ChargeType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ProductType]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "charges", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_4.SupplierOnProductType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ProductType]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "stock", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.ProductType),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        category_service_1.CategoryService,
        charge_service_1.ChargeService,
        suppliers_on_product_service_1.SupplierOnProductService])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map