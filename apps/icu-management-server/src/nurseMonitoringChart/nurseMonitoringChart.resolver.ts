import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NurseMonitoringChartResolverBase } from "./base/nurseMonitoringChart.resolver.base";
import { NurseMonitoringChart } from "./base/NurseMonitoringChart";
import { NurseMonitoringChartService } from "./nurseMonitoringChart.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NurseMonitoringChart)
export class NurseMonitoringChartResolver extends NurseMonitoringChartResolverBase {
  constructor(
    protected readonly service: NurseMonitoringChartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
