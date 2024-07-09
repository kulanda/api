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
exports.ServiceType = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
let ServiceType = class ServiceType {
};
exports.ServiceType = ServiceType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], ServiceType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ServiceType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServiceType.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ServiceType.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], ServiceType.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServiceType.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServiceType.prototype, "storeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], ServiceType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], ServiceType.prototype, "updatedAt", void 0);
exports.ServiceType = ServiceType = __decorate([
    (0, graphql_1.ObjectType)()
], ServiceType);
//# sourceMappingURL=service.type.js.map