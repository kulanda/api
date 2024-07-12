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
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const company_service_1 = require("./company.service");
const dto_2 = require("../cae/dto");
const CAE_service_1 = require("../cae/CAE.service");
let CompanyResolver = class CompanyResolver {
    constructor(companyService, caeService) {
        this.companyService = companyService;
        this.caeService = caeService;
    }
    async createCompany(req, data) {
        return this.companyService.createCompany(req.clien, data);
    }
    async cae(req, company) {
        return this.caeService.getCAE(req.client, company.caeId);
    }
};
exports.CompanyResolver = CompanyResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.CompanyType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateCompanyArgs]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "createCompany", null);
__decorate([
    (0, graphql_1.ResolveField)(() => dto_2.CAEType),
    __param(0, (0, graphql_1.Context)("req")),
    __param(1, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CompanyType]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "cae", null);
exports.CompanyResolver = CompanyResolver = __decorate([
    (0, graphql_1.Resolver)(() => dto_1.CompanyType),
    __metadata("design:paramtypes", [company_service_1.CompanyService,
        CAE_service_1.CaeService])
], CompanyResolver);
//# sourceMappingURL=company.resolver.js.map