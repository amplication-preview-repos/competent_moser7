import { DoctorProgressNote as TDoctorProgressNote } from "../api/doctorProgressNote/DoctorProgressNote";

export const DOCTORPROGRESSNOTE_TITLE_FIELD = "id";

export const DoctorProgressNoteTitle = (
  record: TDoctorProgressNote
): string => {
  return record.id?.toString() || String(record.id);
};
