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
exports.CreateUserStoreArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateUserStoreArgs = class CreateUserStoreArgs {
};
exports.CreateUserStoreArgs = CreateUserStoreArgs;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserStoreArgs.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)({
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserStoreArgs.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserStoreArgs.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({
        nullable: true,
    }),
    (0, class_validator_1.IsPhoneNumber)('AO'),
    __metadata("design:type", String)
], CreateUserStoreArgs.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateUserStoreArgs.prototype, "storeId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], CreateUserStoreArgs.prototype, "password", void 0);
exports.CreateUserStoreArgs = CreateUserStoreArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateUserStoreArgs);
//# sourceMappingURL=create-user-store.args.js.map