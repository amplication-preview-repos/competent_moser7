import { Patient } from "../patient/Patient";

export type DoctorProgressNote = {
  createdAt: Date;
  date: Date | null;
  id: string;
  note: string | null;
  patient?: Patient | null;
  updatedAt: Date;
};
