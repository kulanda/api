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
exports.ServiceResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const guard_1 = require("../auth/guard");
const common_1 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const service_service_1 = require("./service.service");
const category_service_1 = require("../category/category.service");
const dto_2 = require("../category/dto");
const filter_service_input_1 = require("./dto/filter-service.input");
let ServiceResolver = class ServiceResolver {
    constructor(serviceService, categoryService) {
        this.serviceService = serviceService;
        this.categoryService = categoryService;
    }
    async createService(req, _, data) {
        return this.serviceService.createService(req.client, data);
    }
    async editService(req, _, id, data) {
        return this.serviceService.editService(req.client, id, data);
    }
    async getServices(req, storeId, filter) {
        return this.serviceService.getServices(req.client, storeId, filter);
    }
    async getService(req, id) {
        return this.serviceService.getService(req.client, id);
    }
    async category(req, service) {
        return this.categoryService.getCategory(req.client, service.categoryId);
    }
};
exports.ServiceResolver = ServiceResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.ServiceType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, decorator_1.GetUser)({
        access: ["OWNER", "MANAGER"],
    })),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.CreateServiceArgs]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "createService", null);
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.ServiceType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, decorator_1.GetUser)({
        access: ["OWNER", "MANAGER"],
    })),
    __param(2, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __param(3, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, dto_1.EditServiceArgs]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "editService", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.ServiceType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("storeId", { type: () => graphql_1.ID })),
    __param(2, (0, graphql_1.Args)("filter", { type: () => filter_service_input_1.FilterServiceInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, filter_service_input_1.FilterServiceInput]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getServices", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.ServiceType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getService", null);
__decorate([
    (0, graphql_1.ResolveField)(() => dto_2.CategoryType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ServiceType]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "category", null);
exports.ServiceResolver = ServiceResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.ServiceType),
    __metadata("design:paramtypes", [service_service_1.ServiceService,
        category_service_1.CategoryService])
], ServiceResolver);
//# sourceMappingURL=service.resolver.js.map