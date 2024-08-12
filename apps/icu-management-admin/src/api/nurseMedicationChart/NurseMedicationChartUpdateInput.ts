import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type NurseMedicationChartUpdateInput = {
  date?: Date | null;
  medication?: string | null;
  patient?: PatientWhereUniqueInput | null;
  time?: Date | null;
};
