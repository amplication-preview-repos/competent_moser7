import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DoctorProgressNoteWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
};
