import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorProgressNoteListRelationFilter } from "../doctorProgressNote/DoctorProgressNoteListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { NurseMedicationChartListRelationFilter } from "../nurseMedicationChart/NurseMedicationChartListRelationFilter";
import { NurseMonitoringChartListRelationFilter } from "../nurseMonitoringChart/NurseMonitoringChartListRelationFilter";

export type PatientWhereInput = {
  age?: IntNullableFilter;
  contactNumber?: StringNullableFilter;
  doctorProgressNotes?: DoctorProgressNoteListRelationFilter;
  gender?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  nurseMedicationCharts?: NurseMedicationChartListRelationFilter;
  nurseMonitoringCharts?: NurseMonitoringChartListRelationFilter;
};
