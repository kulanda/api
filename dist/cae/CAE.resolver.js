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
exports.CaeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const CAE_service_1 = require("./CAE.service");
const dto_2 = require("../sector/dto");
const sector_service_1 = require("../sector/sector.service");
let CaeResolver = class CaeResolver {
    constructor(cAEService, sectorService) {
        this.cAEService = cAEService;
        this.sectorService = sectorService;
    }
    async createCAE(data) {
        return this.cAEService.createCAE(data);
    }
    async getCAEs() {
        return this.cAEService.getCAEs();
    }
    async getCAE(id) {
        return this.cAEService.getCAE(id);
    }
    async sector(cae) {
        return this.sectorService.getSector(cae.sectorId);
    }
};
exports.CaeResolver = CaeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.CAEType),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCAEArgs]),
    __metadata("design:returntype", Promise)
], CaeResolver.prototype, "createCAE", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.CAEType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaeResolver.prototype, "getCAEs", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.CAEType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CaeResolver.prototype, "getCAE", null);
__decorate([
    (0, graphql_1.ResolveField)(() => dto_2.SectorType),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CAEType]),
    __metadata("design:returntype", Promise)
], CaeResolver.prototype, "sector", null);
exports.CaeResolver = CaeResolver = __decorate([
    (0, graphql_1.Resolver)(() => dto_1.CAEType),
    __metadata("design:paramtypes", [CAE_service_1.CaeService,
        sector_service_1.SectorService])
], CaeResolver);
//# sourceMappingURL=CAE.resolver.js.map