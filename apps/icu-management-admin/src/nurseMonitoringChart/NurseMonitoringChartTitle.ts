import { NurseMonitoringChart as TNurseMonitoringChart } from "../api/nurseMonitoringChart/NurseMonitoringChart";

export const NURSEMONITORINGCHART_TITLE_FIELD = "bp";

export const NurseMonitoringChartTitle = (
  record: TNurseMonitoringChart
): string => {
  return record.bp?.toString() || String(record.id);
};
