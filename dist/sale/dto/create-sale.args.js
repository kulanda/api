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
exports.CreateSaleArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const dto_1 = require("../../order/dto");
let CreateSaleArgs = class CreateSaleArgs {
};
exports.CreateSaleArgs = CreateSaleArgs;
__decorate([
    (0, graphql_1.Field)(() => Number, {
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], CreateSaleArgs.prototype, "change", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], CreateSaleArgs.prototype, "cash", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], CreateSaleArgs.prototype, "bankCard", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], CreateSaleArgs.prototype, "totalPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dto_1.CreateOrderSaleInput]),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateSaleArgs.prototype, "orders", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        nullable: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSaleArgs.prototype, "clientId", void 0);
exports.CreateSaleArgs = CreateSaleArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateSaleArgs);
//# sourceMappingURL=create-sale.args.js.map