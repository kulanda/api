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
exports.SignUpArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const dto_1 = require("../../user/dto");
let SignUpArgs = class SignUpArgs {
};
exports.SignUpArgs = SignUpArgs;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpArgs.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)({
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SignUpArgs.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignUpArgs.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({
        nullable: true,
    }),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], SignUpArgs.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => dto_1.AccessEnumType, {
        nullable: true,
        defaultValue: "SELLER",
    }),
    (0, class_validator_1.IsEnum)(["SELLER", "OWNER", "MANAGER"]),
    __metadata("design:type", Object)
], SignUpArgs.prototype, "access", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        nullable: true,
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SignUpArgs.prototype, "storeId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], SignUpArgs.prototype, "password", void 0);
exports.SignUpArgs = SignUpArgs = __decorate([
    (0, graphql_1.ArgsType)()
], SignUpArgs);
//# sourceMappingURL=sign-up.args.js.map