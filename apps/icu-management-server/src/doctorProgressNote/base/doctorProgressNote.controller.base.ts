/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DoctorProgressNoteService } from "../doctorProgressNote.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DoctorProgressNoteCreateInput } from "./DoctorProgressNoteCreateInput";
import { DoctorProgressNote } from "./DoctorProgressNote";
import { DoctorProgressNoteFindManyArgs } from "./DoctorProgressNoteFindManyArgs";
import { DoctorProgressNoteWhereUniqueInput } from "./DoctorProgressNoteWhereUniqueInput";
import { DoctorProgressNoteUpdateInput } from "./DoctorProgressNoteUpdateInput";
import { DoctorProgressNoteUpdateManyWithoutPatientsInput } from "../../patient/base/DoctorProgressNoteUpdateManyWithoutPatientsInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DoctorProgressNoteControllerBase {
  constructor(
    protected readonly service: DoctorProgressNoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DoctorProgressNote })
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDoctorProgressNote(
    @common.Body() data: DoctorProgressNoteCreateInput
  ): Promise<DoctorProgressNote> {
    return await this.service.createDoctorProgressNote({
      data: {
        ...data,

        patient: data.patient
          ? {
              connect: data.patient,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        date: true,
        id: true,
        note: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DoctorProgressNote] })
  @ApiNestedQuery(DoctorProgressNoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async doctorProgressNotes(
    @common.Req() request: Request
  ): Promise<DoctorProgressNote[]> {
    const args = plainToClass(DoctorProgressNoteFindManyArgs, request.query);
    return this.service.doctorProgressNotes({
      ...args,
      select: {
        createdAt: true,
        date: true,
        id: true,
        note: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DoctorProgressNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async doctorProgressNote(
    @common.Param() params: DoctorProgressNoteWhereUniqueInput
  ): Promise<DoctorProgressNote | null> {
    const result = await this.service.doctorProgressNote({
      where: params,
      select: {
        createdAt: true,
        date: true,
        id: true,
        note: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DoctorProgressNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDoctorProgressNote(
    @common.Param() params: DoctorProgressNoteWhereUniqueInput,
    @common.Body() data: DoctorProgressNoteUpdateInput
  ): Promise<DoctorProgressNote | null> {
    try {
      return await this.service.updateDoctorProgressNote({
        where: params,
        data: {
          ...data,

          patient: data.patient
            ? {
                connect: data.patient,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          date: true,
          id: true,
          note: true,

          patient: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DoctorProgressNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DoctorProgressNote",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDoctorProgressNote(
    @common.Param() params: DoctorProgressNoteWhereUniqueInput
  ): Promise<DoctorProgressNote | null> {
    try {
      return await this.service.deleteDoctorProgressNote({
        where: params,
        select: {
          createdAt: true,
          date: true,
          id: true,
          note: true,

          patient: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/generate-doctor-progress-notes")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GenerateDoctorProgressNotes(
    @common.Body()
    body: DoctorProgressNoteUpdateManyWithoutPatientsInput
  ): Promise<string> {
    return this.service.GenerateDoctorProgressNotes(body);
  }
}
