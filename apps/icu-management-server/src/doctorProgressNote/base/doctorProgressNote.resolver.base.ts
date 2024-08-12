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
import { DoctorProgressNote } from "./DoctorProgressNote";
import { DoctorProgressNoteCountArgs } from "./DoctorProgressNoteCountArgs";
import { DoctorProgressNoteFindManyArgs } from "./DoctorProgressNoteFindManyArgs";
import { DoctorProgressNoteFindUniqueArgs } from "./DoctorProgressNoteFindUniqueArgs";
import { CreateDoctorProgressNoteArgs } from "./CreateDoctorProgressNoteArgs";
import { UpdateDoctorProgressNoteArgs } from "./UpdateDoctorProgressNoteArgs";
import { DeleteDoctorProgressNoteArgs } from "./DeleteDoctorProgressNoteArgs";
import { Patient } from "../../patient/base/Patient";
import { DoctorProgressNoteUpdateManyWithoutPatientsInput } from "../../patient/base/DoctorProgressNoteUpdateManyWithoutPatientsInput";
import { DoctorProgressNoteService } from "../doctorProgressNote.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorProgressNote)
export class DoctorProgressNoteResolverBase {
  constructor(
    protected readonly service: DoctorProgressNoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "read",
    possession: "any",
  })
  async _doctorProgressNotesMeta(
    @graphql.Args() args: DoctorProgressNoteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DoctorProgressNote])
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "read",
    possession: "any",
  })
  async doctorProgressNotes(
    @graphql.Args() args: DoctorProgressNoteFindManyArgs
  ): Promise<DoctorProgressNote[]> {
    return this.service.doctorProgressNotes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DoctorProgressNote, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "read",
    possession: "own",
  })
  async doctorProgressNote(
    @graphql.Args() args: DoctorProgressNoteFindUniqueArgs
  ): Promise<DoctorProgressNote | null> {
    const result = await this.service.doctorProgressNote(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DoctorProgressNote)
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "create",
    possession: "any",
  })
  async createDoctorProgressNote(
    @graphql.Args() args: CreateDoctorProgressNoteArgs
  ): Promise<DoctorProgressNote> {
    return await this.service.createDoctorProgressNote({
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
  @graphql.Mutation(() => DoctorProgressNote)
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "update",
    possession: "any",
  })
  async updateDoctorProgressNote(
    @graphql.Args() args: UpdateDoctorProgressNoteArgs
  ): Promise<DoctorProgressNote | null> {
    try {
      return await this.service.updateDoctorProgressNote({
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

  @graphql.Mutation(() => DoctorProgressNote)
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "delete",
    possession: "any",
  })
  async deleteDoctorProgressNote(
    @graphql.Args() args: DeleteDoctorProgressNoteArgs
  ): Promise<DoctorProgressNote | null> {
    try {
      return await this.service.deleteDoctorProgressNote(args);
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
    @graphql.Parent() parent: DoctorProgressNote
  ): Promise<Patient | null> {
    const result = await this.service.getPatient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => String)
  async GenerateDoctorProgressNotes(
    @graphql.Args()
    args: DoctorProgressNoteUpdateManyWithoutPatientsInput
  ): Promise<string> {
    return this.service.GenerateDoctorProgressNotes(args);
  }
}