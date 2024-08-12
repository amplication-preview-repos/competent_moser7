import { DoctorProgressNoteUpdateManyWithoutPatientsInput } from "./DoctorProgressNoteUpdateManyWithoutPatientsInput";
import { NurseMedicationChartUpdateManyWithoutPatientsInput } from "./NurseMedicationChartUpdateManyWithoutPatientsInput";
import { NurseMonitoringChartUpdateManyWithoutPatientsInput } from "./NurseMonitoringChartUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  age?: number | null;
  contactNumber?: string | null;
  doctorProgressNotes?: DoctorProgressNoteUpdateManyWithoutPatientsInput;
  gender?: "Option1" | null;
  name?: string | null;
  nurseMedicationCharts?: NurseMedicationChartUpdateManyWithoutPatientsInput;
  nurseMonitoringCharts?: NurseMonitoringChartUpdateManyWithoutPatientsInput;
};
