import { DoctorProgressNoteCreateNestedManyWithoutPatientsInput } from "./DoctorProgressNoteCreateNestedManyWithoutPatientsInput";
import { NurseMedicationChartCreateNestedManyWithoutPatientsInput } from "./NurseMedicationChartCreateNestedManyWithoutPatientsInput";
import { NurseMonitoringChartCreateNestedManyWithoutPatientsInput } from "./NurseMonitoringChartCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  age?: number | null;
  contactNumber?: string | null;
  doctorProgressNotes?: DoctorProgressNoteCreateNestedManyWithoutPatientsInput;
  gender?: "Option1" | null;
  name?: string | null;
  nurseMedicationCharts?: NurseMedicationChartCreateNestedManyWithoutPatientsInput;
  nurseMonitoringCharts?: NurseMonitoringChartCreateNestedManyWithoutPatientsInput;
};
