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
exports.CreateCompanyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const graphql_upload_ts_1 = require("graphql-upload-ts");
let CreateCompanyArgs = class CreateCompanyArgs {
};
exports.CreateCompanyArgs = CreateCompanyArgs;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCompanyArgs.prototype, "tenantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyArgs.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyArgs.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_upload_ts_1.GraphQLUpload, {
        nullable: true,
    }),
    (0, class_validator_1.IsMultibyte)(),
    __metadata("design:type", Object)
], CreateCompanyArgs.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCompanyArgs.prototype, "caeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateCompanyArgs.prototype, "saftExportDate", void 0);
exports.CreateCompanyArgs = CreateCompanyArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateCompanyArgs);
//# sourceMappingURL=create-company.args.js.map