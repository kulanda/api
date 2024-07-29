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
exports.CompanyResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const guard_1 = require("../auth/guard");
const dto_1 = require("./dto");
const company_service_1 = require("./company.service");
const dto_2 = require("../store/dto");
const store_service_1 = require("../store/store.service");
const dto_3 = require("../cae/dto");
const cae_service_1 = require("../cae/cae.service");
let CompanyResolver = class CompanyResolver {
    constructor(companyService, storeService, caeService) {
        this.companyService = companyService;
        this.storeService = storeService;
        this.caeService = caeService;
    }
    async getCompany(req) {
        return this.companyService.getCompany(req.tenantId);
    }
    async stores(req, company) {
        return this.storeService.getStores(req.client, company.id);
    }
    async cae(company) {
        return this.caeService.getCAE(company.caeId);
    }
};
exports.CompanyResolver = CompanyResolver;
__decorate([
    (0, graphql_1.Query)(() => dto_1.CompanyType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Context)("req")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "getCompany", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_2.StoreType]),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CompanyType]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "stores", null);
__decorate([
    (0, graphql_1.ResolveField)(() => dto_3.CAEType),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CompanyType]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "cae", null);
exports.CompanyResolver = CompanyResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.CompanyType),
    __metadata("design:paramtypes", [company_service_1.CompanyService,
        store_service_1.StoreService,
        cae_service_1.CaeService])
], CompanyResolver);
//# sourceMappingURL=company.resolver.js.map