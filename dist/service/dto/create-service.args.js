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
exports.CreateServiceArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
let CreateServiceArgs = class CreateServiceArgs {
};
exports.CreateServiceArgs = CreateServiceArgs;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateServiceArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateServiceArgs.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], CreateServiceArgs.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceArgs.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID], {
        nullable: true,
        defaultValue: []
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateServiceArgs.prototype, "charges", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceArgs.prototype, "storeId", void 0);
exports.CreateServiceArgs = CreateServiceArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateServiceArgs);
//# sourceMappingURL=create-service.args.js.map