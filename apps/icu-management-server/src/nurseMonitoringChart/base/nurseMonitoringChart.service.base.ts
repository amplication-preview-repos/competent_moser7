/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  NurseMonitoringChart as PrismaNurseMonitoringChart,
  Patient as PrismaPatient,
} from "@prisma/client";

import { NurseMedicationChartUpdateManyWithoutPatientsInput } from "../../patient/base/NurseMedicationChartUpdateManyWithoutPatientsInput";

export class NurseMonitoringChartServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.NurseMonitoringChartCountArgs, "select">
  ): Promise<number> {
    return this.prisma.nurseMonitoringChart.count(args);
  }

  async nurseMonitoringCharts(
    args: Prisma.NurseMonitoringChartFindManyArgs
  ): Promise<PrismaNurseMonitoringChart[]> {
    return this.prisma.nurseMonitoringChart.findMany(args);
  }
  async nurseMonitoringChart(
    args: Prisma.NurseMonitoringChartFindUniqueArgs
  ): Promise<PrismaNurseMonitoringChart | null> {
    return this.prisma.nurseMonitoringChart.findUnique(args);
  }
  async createNurseMonitoringChart(
    args: Prisma.NurseMonitoringChartCreateArgs
  ): Promise<PrismaNurseMonitoringChart> {
    return this.prisma.nurseMonitoringChart.create(args);
  }
  async updateNurseMonitoringChart(
    args: Prisma.NurseMonitoringChartUpdateArgs
  ): Promise<PrismaNurseMonitoringChart> {
    return this.prisma.nurseMonitoringChart.update(args);
  }
  async deleteNurseMonitoringChart(
    args: Prisma.NurseMonitoringChartDeleteArgs
  ): Promise<PrismaNurseMonitoringChart> {
    return this.prisma.nurseMonitoringChart.delete(args);
  }

  async getPatient(parentId: string): Promise<PrismaPatient | null> {
    return this.prisma.nurseMonitoringChart
      .findUnique({
        where: { id: parentId },
      })
      .patient();
  }
  async GenerateNurseMonitoringCharts(
    args: NurseMedicationChartUpdateManyWithoutPatientsInput
  ): Promise<string> {
    throw new Error("Not implemented");
  }
}
