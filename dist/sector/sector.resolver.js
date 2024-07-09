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
exports.SectorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const sector_service_1 = require("./sector.service");
const common_1 = require("@nestjs/common");
const guard_1 = require("../auth/guard");
let SectorResolver = class SectorResolver {
    constructor(sectorService) {
        this.sectorService = sectorService;
    }
    async createSector(data) {
        return this.sectorService.createSector(data);
    }
    async getSectors() {
        return this.sectorService.getCategories();
    }
    async getSector(id) {
        return this.sectorService.getSector(id);
    }
};
exports.SectorResolver = SectorResolver;
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.SectorType),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateSectorArgs]),
    __metadata("design:returntype", Promise)
], SectorResolver.prototype, "createSector", null);
__decorate([
    (0, graphql_1.Query)(() => [dto_1.SectorType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SectorResolver.prototype, "getSectors", null);
__decorate([
    (0, graphql_1.Query)(() => dto_1.SectorType, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectorResolver.prototype, "getSector", null);
exports.SectorResolver = SectorResolver = __decorate([
    (0, common_1.UseGuards)(guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => dto_1.SectorType),
    __metadata("design:paramtypes", [sector_service_1.SectorService])
], SectorResolver);
//# sourceMappingURL=sector.resolver.js.map