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
exports.ReportStoreOptionsInput = exports.PeriodReportStoreOptionsEnumType = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
var PeriodReportStoreOptionsEnumType;
(function (PeriodReportStoreOptionsEnumType) {
    PeriodReportStoreOptionsEnumType["DAY"] = "DAY";
    PeriodReportStoreOptionsEnumType["WEEK"] = "WEEK";
    PeriodReportStoreOptionsEnumType["MONTH"] = "MONTH";
    PeriodReportStoreOptionsEnumType["YEAR"] = "YEAR";
})(PeriodReportStoreOptionsEnumType || (exports.PeriodReportStoreOptionsEnumType = PeriodReportStoreOptionsEnumType = {}));
(0, graphql_1.registerEnumType)(PeriodReportStoreOptionsEnumType, {
    name: 'PeriodReportStoreOptionsEnumType',
});
let ReportStoreOptionsInput = class ReportStoreOptionsInput {
};
exports.ReportStoreOptionsInput = ReportStoreOptionsInput;
__decorate([
    (0, graphql_1.Field)(() => PeriodReportStoreOptionsEnumType, {
        nullable: true,
    }),
    (0, class_validator_1.IsEnum)(['DAY', 'WEEK', 'MONTH', 'YEAR']),
    __metadata("design:type", Object)
], ReportStoreOptionsInput.prototype, "period", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
        defaultValue: new Date(),
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ReportStoreOptionsInput.prototype, "from", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        nullable: true,
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReportStoreOptionsInput.prototype, "sellerId", void 0);
exports.ReportStoreOptionsInput = ReportStoreOptionsInput = __decorate([
    (0, graphql_1.InputType)()
], ReportStoreOptionsInput);
//# sourceMappingURL=report-store-options.input.js.map