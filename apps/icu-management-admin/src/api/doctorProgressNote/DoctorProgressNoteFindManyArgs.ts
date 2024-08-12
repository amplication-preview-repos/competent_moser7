import { DoctorProgressNoteWhereInput } from "./DoctorProgressNoteWhereInput";
import { DoctorProgressNoteOrderByInput } from "./DoctorProgressNoteOrderByInput";

export type DoctorProgressNoteFindManyArgs = {
  where?: DoctorProgressNoteWhereInput;
  orderBy?: Array<DoctorProgressNoteOrderByInput>;
  skip?: number;
  take?: number;
};
