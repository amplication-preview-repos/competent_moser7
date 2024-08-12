import { DoctorProgressNote } from "../doctorProgressNote/DoctorProgressNote";
import { NurseMedicationChart } from "../nurseMedicationChart/NurseMedicationChart";
import { NurseMonitoringChart } from "../nurseMonitoringChart/NurseMonitoringChart";

export type Patient = {
  age: number | null;
  contactNumber: string | null;
  createdAt: Date;
  doctorProgressNotes?: Array<DoctorProgressNote>;
  gender?: "Option1" | null;
  id: string;
  name: string | null;
  nurseMedicationCharts?: Array<NurseMedicationChart>;
  nurseMonitoringCharts?: Array<NurseMonitoringChart>;
  updatedAt: Date;
};
