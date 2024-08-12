import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DoctorProgressNoteCreateInput = {
  date?: Date | null;
  note?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
