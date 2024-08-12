import { Patient } from "../patient/Patient";

export type NurseMedicationChart = {
  createdAt: Date;
  date: Date | null;
  id: string;
  medication: string | null;
  patient?: Patient | null;
  time: Date | null;
  updatedAt: Date;
};
