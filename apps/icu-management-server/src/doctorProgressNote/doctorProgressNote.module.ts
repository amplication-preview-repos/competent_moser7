import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorProgressNoteModuleBase } from "./base/doctorProgressNote.module.base";
import { DoctorProgressNoteService } from "./doctorProgressNote.service";
import { DoctorProgressNoteController } from "./doctorProgressNote.controller";
import { DoctorProgressNoteResolver } from "./doctorProgressNote.resolver";

@Module({
  imports: [DoctorProgressNoteModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorProgressNoteController],
  providers: [DoctorProgressNoteService, DoctorProgressNoteResolver],
  exports: [DoctorProgressNoteService],
})
export class DoctorProgressNoteModule {}
