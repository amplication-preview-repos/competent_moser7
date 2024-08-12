import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NurseMedicationChartResolverBase } from "./base/nurseMedicationChart.resolver.base";
import { NurseMedicationChart } from "./base/NurseMedicationChart";
import { NurseMedicationChartService } from "./nurseMedicationChart.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NurseMedicationChart)
export class NurseMedicationChartResolver extends NurseMedicationChartResolverBase {
  constructor(
    protected readonly service: NurseMedicationChartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
