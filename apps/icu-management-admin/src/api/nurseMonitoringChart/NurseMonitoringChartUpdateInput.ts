import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type NurseMonitoringChartUpdateInput = {
  bp?: string | null;
  date?: Date | null;
  patient?: PatientWhereUniqueInput | null;
  spo2?: number | null;
  time?: Date | null;
};
