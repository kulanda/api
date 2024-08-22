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
exports.CreateStoreArgs = exports.StoreSaleEnumType = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
var StoreSaleEnumType;
(function (StoreSaleEnumType) {
    StoreSaleEnumType["DEFAULT"] = "DEFAULT";
    StoreSaleEnumType["PRODUCT"] = "PRODUCT";
    StoreSaleEnumType["SERVICE"] = "SERVICE";
})(StoreSaleEnumType || (exports.StoreSaleEnumType = StoreSaleEnumType = {}));
(0, graphql_1.registerEnumType)(StoreSaleEnumType, {
    name: "StoreSaleEnumType",
});
let CreateStoreArgs = class CreateStoreArgs {
};
exports.CreateStoreArgs = CreateStoreArgs;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStoreArgs.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStoreArgs.prototype, "designation", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStoreArgs.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateStoreArgs.prototype, "globalSale", void 0);
__decorate([
    (0, graphql_1.Field)(() => StoreSaleEnumType, {
        nullable: true,
        defaultValue: "DEFAULT",
    }),
    (0, class_validator_1.IsEnum)(["DEFAULT", "PRODUCT", "SERVICE"]),
    __metadata("design:type", String)
], CreateStoreArgs.prototype, "saleType", void 0);
exports.CreateStoreArgs = CreateStoreArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateStoreArgs);
//# sourceMappingURL=create-store.args.js.map