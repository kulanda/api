export declare enum PeriodReportStoreOptionsEnumType {
    DAY = "DAY",
    WEEK = "WEEK",
    MONTH = "MONTH",
    YEAR = "YEAR"
}
export declare class ReportStoreOptionsInput {
    period: keyof typeof PeriodReportStoreOptionsEnumType;
    from: Date;
    sellerId: string;
}
