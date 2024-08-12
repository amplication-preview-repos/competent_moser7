import { SortOrder } from "../../util/SortOrder";

export type DoctorProgressNoteOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
