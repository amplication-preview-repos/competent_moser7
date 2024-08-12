import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  age?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
