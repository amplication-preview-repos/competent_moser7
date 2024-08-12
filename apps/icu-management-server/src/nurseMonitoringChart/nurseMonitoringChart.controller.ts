import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NurseMonitoringChartService } from "./nurseMonitoringChart.service";
import { NurseMonitoringChartControllerBase } from "./base/nurseMonitoringChart.controller.base";

@swagger.ApiTags("nurseMonitoringCharts")
@common.Controller("nurseMonitoringCharts")
export class NurseMonitoringChartController extends NurseMonitoringChartControllerBase {
  constructor(
    protected readonly service: NurseMonitoringChartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
