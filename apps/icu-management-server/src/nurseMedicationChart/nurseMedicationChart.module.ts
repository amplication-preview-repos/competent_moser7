import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NurseMedicationChartModuleBase } from "./base/nurseMedicationChart.module.base";
import { NurseMedicationChartService } from "./nurseMedicationChart.service";
import { NurseMedicationChartController } from "./nurseMedicationChart.controller";
import { NurseMedicationChartResolver } from "./nurseMedicationChart.resolver";

@Module({
  imports: [NurseMedicationChartModuleBase, forwardRef(() => AuthModule)],
  controllers: [NurseMedicationChartController],
  providers: [NurseMedicationChartService, NurseMedicationChartResolver],
  exports: [NurseMedicationChartService],
})
export class NurseMedicationChartModule {}
