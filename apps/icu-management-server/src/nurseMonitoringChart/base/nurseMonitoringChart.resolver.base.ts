/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { NurseMonitoringChart } from "./NurseMonitoringChart";
import { NurseMonitoringChartCountArgs } from "./NurseMonitoringChartCountArgs";
import { NurseMonitoringChartFindManyArgs } from "./NurseMonitoringChartFindManyArgs";
import { NurseMonitoringChartFindUniqueArgs } from "./NurseMonitoringChartFindUniqueArgs";
import { CreateNurseMonitoringChartArgs } from "./CreateNurseMonitoringChartArgs";
import { UpdateNurseMonitoringChartArgs } from "./UpdateNurseMonitoringChartArgs";
import { DeleteNurseMonitoringChartArgs } from "./DeleteNurseMonitoringChartArgs";
import { Patient } from "../../patient/base/Patient";
import { NurseMedicationChartUpdateManyWithoutPatientsInput } from "../../patient/base/NurseMedicationChartUpdateManyWithoutPatientsInput";
import { NurseMonitoringChartService } from "../nurseMonitoringChart.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NurseMonitoringChart)
export class NurseMonitoringChartResolverBase {
  constructor(
    protected readonly service: NurseMonitoringChartService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NurseMonitoringChart",
    action: "read",
    possession: "any",
  })
  async _nurseMonitoringChartsMeta(
    @graphql.Args() args: NurseMonitoringChartCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NurseMonitoringChart])
  @nestAccessControl.UseRoles({
    resource: "NurseMonitoringChart",
    action: "read",
    possession: "any",
  })
  async nurseMonitoringCharts(
    @graphql.Args() args: NurseMonitoringChartFindManyArgs
  ): Promise<NurseMonitoringChart[]> {
    return this.service.nurseMonitoringCharts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NurseMonitoringChart, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NurseMonitoringChart",
    action: "read",
    possession: "own",
  })
  async nurseMonitoringChart(
    @graphql.Args() args: NurseMonitoringChartFindUniqueArgs
  ): Promise<NurseMonitoringChart | null> {
    const result = await this.service.nurseMonitoringChart(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NurseMonitoringChart)
  @nestAccessControl.UseRoles({
    resource: "NurseMonitoringChart",
    action: "create",
    possession: "any",
  })
  async createNurseMonitoringChart(
    @graphql.Args() args: CreateNurseMonitoringChartArgs
  ): Promise<NurseMonitoringChart> {
    return await this.service.createNurseMonitoringChart({
      ...args,
      data: {
        ...args.data,

        patient: args.data.patient
          ? {
              connect: args.data.patient,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NurseMonitoringChart)
  @nestAccessControl.UseRoles({
    resource: "NurseMonitoringChart",
    action: "update",
    possession: "any",
  })
  async updateNurseMonitoringChart(
    @graphql.Args() args: UpdateNurseMonitoringChartArgs
  ): Promise<NurseMonitoringChart | null> {
    try {
      return await this.service.updateNurseMonitoringChart({
        ...args,
        data: {
          ...args.data,

          patient: args.data.patient
            ? {
                connect: args.data.patient,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => NurseMonitoringChart)
  @nestAccessControl.UseRoles({
    resource: "NurseMonitoringChart",
    action: "delete",
    possession: "any",
  })
  async deleteNurseMonitoringChart(
    @graphql.Args() args: DeleteNurseMonitoringChartArgs
  ): Promise<NurseMonitoringChart | null> {
    try {
      return await this.service.deleteNurseMonitoringChart(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Patient, {
    nullable: true,
    name: "patient",
  })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async getPatient(
    @graphql.Parent() parent: NurseMonitoringChart
  ): Promise<Patient | null> {
    const result = await this.service.getPatient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => String)
  async GenerateNurseMonitoringCharts(
    @graphql.Args()
    args: NurseMedicationChartUpdateManyWithoutPatientsInput
  ): Promise<string> {
    return this.service.GenerateNurseMonitoringCharts(args);
  }
}