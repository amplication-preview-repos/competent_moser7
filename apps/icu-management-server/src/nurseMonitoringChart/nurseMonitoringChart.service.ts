import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NurseMonitoringChartServiceBase } from "./base/nurseMonitoringChart.service.base";

@Injectable()
export class NurseMonitoringChartService extends NurseMonitoringChartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
