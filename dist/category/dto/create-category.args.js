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
exports.CreateCategoryArgs = exports.CategoryEnumType = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
var CategoryEnumType;
(function (CategoryEnumType) {
    CategoryEnumType["PRODUCT"] = "PRODUCT";
    CategoryEnumType["SERVICE"] = "SERVICE";
})(CategoryEnumType || (exports.CategoryEnumType = CategoryEnumType = {}));
(0, graphql_1.registerEnumType)(CategoryEnumType, {
    name: 'CategoryEnumType',
});
let CreateCategoryArgs = class CreateCategoryArgs {
};
exports.CreateCategoryArgs = CreateCategoryArgs;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCategoryArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => CategoryEnumType),
    (0, class_validator_1.IsEnum)(['PRODUCT', 'SERVICE']),
    __metadata("design:type", String)
], CreateCategoryArgs.prototype, "type", void 0);
exports.CreateCategoryArgs = CreateCategoryArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateCategoryArgs);
//# sourceMappingURL=create-category.args.js.map