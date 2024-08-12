import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorProgressNoteService } from "./doctorProgressNote.service";
import { DoctorProgressNoteControllerBase } from "./base/doctorProgressNote.controller.base";

@swagger.ApiTags("doctorProgressNotes")
@common.Controller("doctorProgressNotes")
export class DoctorProgressNoteController extends DoctorProgressNoteControllerBase {
  constructor(
    protected readonly service: DoctorProgressNoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
