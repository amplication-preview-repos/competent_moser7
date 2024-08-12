import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type NurseMedicationChartWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  medication?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  time?: DateTimeNullableFilter;
};
