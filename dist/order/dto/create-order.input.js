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
exports.CreateOrderSaleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateOrderSaleInput = class CreateOrderSaleInput {
};
exports.CreateOrderSaleInput = CreateOrderSaleInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderSaleInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderSaleInput.prototype, "serviceId", void 0);
exports.CreateOrderSaleInput = CreateOrderSaleInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderSaleInput);
//# sourceMappingURL=create-order.input.js.map