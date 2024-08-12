import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NurseMedicationChartService } from "./nurseMedicationChart.service";
import { NurseMedicationChartControllerBase } from "./base/nurseMedicationChart.controller.base";

@swagger.ApiTags("nurseMedicationCharts")
@common.Controller("nurseMedicationCharts")
export class NurseMedicationChartController extends NurseMedicationChartControllerBase {
  constructor(
    protected readonly service: NurseMedicationChartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
