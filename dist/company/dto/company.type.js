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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyType = exports.VatRegimeEnumType = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("../../store/dto");
var VatRegimeEnumType;
(function (VatRegimeEnumType) {
    VatRegimeEnumType["GENERAL_REGIME"] = "GENERAL_REGIME";
    VatRegimeEnumType["EXCLUSION_REGIME"] = "EXCLUSION_REGIME";
    VatRegimeEnumType["SIMPLIFIED_REGIME"] = "SIMPLIFIED_REGIME";
})(VatRegimeEnumType || (exports.VatRegimeEnumType = VatRegimeEnumType = {}));
(0, graphql_1.registerEnumType)(VatRegimeEnumType, {
    name: "VatRegimeEnumType",
});
let CompanyType = class CompanyType {
};
exports.CompanyType = CompanyType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], CompanyType.prototype, "tenantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], CompanyType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CompanyType.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CompanyType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CompanyType.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CompanyType.prototype, "fax", void 0);
__decorate([
    (0, graphql_1.Field)(() => VatRegimeEnumType),
    __metadata("design:type", String)
], CompanyType.prototype, "vatRegime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CompanyType.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], CompanyType.prototype, "caeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dto_1.StoreType]),
    __metadata("design:type", Array)
], CompanyType.prototype, "stores", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    __metadata("design:type", Date)
], CompanyType.prototype, "saftExportDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], CompanyType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], CompanyType.prototype, "updatedAt", void 0);
exports.CompanyType = CompanyType = __decorate([
    (0, graphql_1.ObjectType)()
], CompanyType);
//# sourceMappingURL=company.type.js.map