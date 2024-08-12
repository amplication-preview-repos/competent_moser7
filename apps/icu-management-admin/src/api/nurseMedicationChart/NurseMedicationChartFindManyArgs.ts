import { NurseMedicationChartWhereInput } from "./NurseMedicationChartWhereInput";
import { NurseMedicationChartOrderByInput } from "./NurseMedicationChartOrderByInput";

export type NurseMedicationChartFindManyArgs = {
  where?: NurseMedicationChartWhereInput;
  orderBy?: Array<NurseMedicationChartOrderByInput>;
  skip?: number;
  take?: number;
};
