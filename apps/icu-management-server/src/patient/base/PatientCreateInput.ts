/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { DoctorProgressNoteCreateNestedManyWithoutPatientsInput } from "./DoctorProgressNoteCreateNestedManyWithoutPatientsInput";
import { Type } from "class-transformer";
import { EnumPatientGender } from "./EnumPatientGender";
import { NurseMedicationChartCreateNestedManyWithoutPatientsInput } from "./NurseMedicationChartCreateNestedManyWithoutPatientsInput";
import { NurseMonitoringChartCreateNestedManyWithoutPatientsInput } from "./NurseMonitoringChartCreateNestedManyWithoutPatientsInput";

@InputType()
class PatientCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => DoctorProgressNoteCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => DoctorProgressNoteCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => DoctorProgressNoteCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  doctorProgressNotes?: DoctorProgressNoteCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    enum: EnumPatientGender,
  })
  @IsEnum(EnumPatientGender)
  @IsOptional()
  @Field(() => EnumPatientGender, {
    nullable: true,
  })
  gender?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => NurseMedicationChartCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => NurseMedicationChartCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => NurseMedicationChartCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  nurseMedicationCharts?: NurseMedicationChartCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    type: () => NurseMonitoringChartCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => NurseMonitoringChartCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => NurseMonitoringChartCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  nurseMonitoringCharts?: NurseMonitoringChartCreateNestedManyWithoutPatientsInput;
}

export { PatientCreateInput as PatientCreateInput };