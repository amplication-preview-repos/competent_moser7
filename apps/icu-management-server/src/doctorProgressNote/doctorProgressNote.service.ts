import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorProgressNoteServiceBase } from "./base/doctorProgressNote.service.base";

@Injectable()
export class DoctorProgressNoteService extends DoctorProgressNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
