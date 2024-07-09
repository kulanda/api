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
const decorator_1 = require("../auth/decorator");
const guard_1 = require("../auth/guard");
const dto_1 = require("./dto");
const company_service_1 = require("./company.service");
const dto_2 = require("../store/dto");
const store_service_1 = require("../store/store.service");
const dto_3 = require("../cae/dto");
const CAE_service_1 = require("../cae/CAE.service");
let CompanyResolver = class CompanyResolver {
    constructor(companyService, storeService, caeService) {
        this.companyService = companyService;
        this.storeService = storeService;
        this.caeService = caeService;
    }
    async createCompany(userId, data) {
        return this.companyService.createCompany(userId, data);
    }
    async getCompanies(userId) {
        return this.companyService.getCompanies(userId);
    }
    async getCompany(id) {
        return this.companyService.getCompany(id);
    }
    async stores(company) {
        return this.storeService.getStores(company.id);
    }
    async cae(company) {
        return this.caeService.getCAE(company.caeId);
    }
};
exports.CompanyResolver = CompanyResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.CompanyType),
    __param(0, (0, decorator_1.GetUser)({
        data: 'id',
        access: ['OWNER'],
    })),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateCompanyArgs]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "createCompany", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.CompanyType]),
    __param(0, (0, decorator_1.GetUser)({
        data: 'id',
        access: ['OWNER'],
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "getCompanies", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.CompanyType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "getCompany", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [dto_2.StoreType]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CompanyType]),
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
        CAE_service_1.CaeService])
], CompanyResolver);
//# sourceMappingURL=company.resolver.js.map