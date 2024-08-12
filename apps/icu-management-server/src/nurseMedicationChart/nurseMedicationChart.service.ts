import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NurseMedicationChartServiceBase } from "./base/nurseMedicationChart.service.base";

@Injectable()
export class NurseMedicationChartService extends NurseMedicationChartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
