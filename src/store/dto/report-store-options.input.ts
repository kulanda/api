import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';

export enum PeriodReportStoreOptionsEnumType {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

registerEnumType(PeriodReportStoreOptionsEnumType, {
  name: 'PeriodReportStoreOptionsEnumType',
});

@InputType()
export class ReportStoreOptionsInput {
  @Field(() => PeriodReportStoreOptionsEnumType, {
    nullable: true,
  })
  @IsEnum(['DAY', 'WEEK', 'MONTH', 'YEAR'])
  period: keyof typeof PeriodReportStoreOptionsEnumType;

  @Field(() => Date, {
    nullable: true,
    defaultValue: new Date(),
  })
  @IsDate()
  from: Date;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  sellerId: string;
}
