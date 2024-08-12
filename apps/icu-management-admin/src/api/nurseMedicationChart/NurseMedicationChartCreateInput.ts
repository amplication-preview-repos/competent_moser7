import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type NurseMedicationChartCreateInput = {
  date?: Date | null;
  medication?: string | null;
  patient?: PatientWhereUniqueInput | null;
  time?: Date | null;
};
