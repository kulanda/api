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
exports.CategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const category_service_1 = require("./category.service");
const common_1 = require("@nestjs/common");
const guard_1 = require("../auth/guard");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async createCategory(data) {
        return this.categoryService.createCategory(data);
    }
    async getCategories() {
        return this.categoryService.getCategories();
    }
    async getCategory(id) {
        return this.categoryService.getCategory(id);
    }
    async getCategoriesByStore(storeId) {
        return this.categoryService.getCategoriesByStore(storeId);
    }
};
exports.CategoryResolver = CategoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.CategoryType),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.CategoryType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategories", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.CategoryType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.CategoryType], {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)('storeId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategoriesByStore", null);
exports.CategoryResolver = CategoryResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.CategoryType),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryResolver);
//# sourceMappingURL=category.resolver.js.map