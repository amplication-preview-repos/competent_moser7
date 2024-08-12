import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NurseMonitoringChartModuleBase } from "./base/nurseMonitoringChart.module.base";
import { NurseMonitoringChartService } from "./nurseMonitoringChart.service";
import { NurseMonitoringChartController } from "./nurseMonitoringChart.controller";
import { NurseMonitoringChartResolver } from "./nurseMonitoringChart.resolver";

@Module({
  imports: [NurseMonitoringChartModuleBase, forwardRef(() => AuthModule)],
  controllers: [NurseMonitoringChartController],
  providers: [NurseMonitoringChartService, NurseMonitoringChartResolver],
  exports: [NurseMonitoringChartService],
})
export class NurseMonitoringChartModule {}
