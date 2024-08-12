import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type NurseMonitoringChartWhereInput = {
  bp?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  spo2?: IntNullableFilter;
  time?: DateTimeNullableFilter;
};
