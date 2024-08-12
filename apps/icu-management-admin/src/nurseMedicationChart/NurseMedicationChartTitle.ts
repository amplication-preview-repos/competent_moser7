import { NurseMedicationChart as TNurseMedicationChart } from "../api/nurseMedicationChart/NurseMedicationChart";

export const NURSEMEDICATIONCHART_TITLE_FIELD = "medication";

export const NurseMedicationChartTitle = (
  record: TNurseMedicationChart
): string => {
  return record.medication?.toString() || String(record.id);
};
