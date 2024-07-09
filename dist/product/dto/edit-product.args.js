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
exports.EditProductArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
let EditProductArgs = class EditProductArgs {
};
exports.EditProductArgs = EditProductArgs;
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditProductArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditProductArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditProductArgs.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], EditProductArgs.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditProductArgs.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], EditProductArgs.prototype, "expiresOn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        nullable: true,
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditProductArgs.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        nullable: true,
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditProductArgs.prototype, "storeId", void 0);
exports.EditProductArgs = EditProductArgs = __decorate([
    (0, graphql_1.ArgsType)()
], EditProductArgs);
//# sourceMappingURL=edit-product.args.js.map