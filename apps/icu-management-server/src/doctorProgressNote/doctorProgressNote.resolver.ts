import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DoctorProgressNoteResolverBase } from "./base/doctorProgressNote.resolver.base";
import { DoctorProgressNote } from "./base/DoctorProgressNote";
import { DoctorProgressNoteService } from "./doctorProgressNote.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorProgressNote)
export class DoctorProgressNoteResolver extends DoctorProgressNoteResolverBase {
  constructor(
    protected readonly service: DoctorProgressNoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
