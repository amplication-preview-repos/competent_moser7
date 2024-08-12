import { SortOrder } from "../../util/SortOrder";

export type NurseMonitoringChartOrderByInput = {
  bp?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  spo2?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
