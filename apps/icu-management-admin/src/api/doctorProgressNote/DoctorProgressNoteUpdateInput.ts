import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DoctorProgressNoteUpdateInput = {
  date?: Date | null;
  note?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
