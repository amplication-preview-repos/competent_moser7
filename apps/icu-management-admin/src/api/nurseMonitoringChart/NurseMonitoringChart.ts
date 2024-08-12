import { Patient } from "../patient/Patient";

export type NurseMonitoringChart = {
  bp: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  patient?: Patient | null;
  spo2: number | null;
  time: Date | null;
  updatedAt: Date;
};
