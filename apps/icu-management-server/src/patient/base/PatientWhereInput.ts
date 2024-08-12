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
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorProgressNoteListRelationFilter } from "../../doctorProgressNote/base/DoctorProgressNoteListRelationFilter";
import { EnumPatientGender } from "./EnumPatientGender";
import { StringFilter } from "../../util/StringFilter";
import { NurseMedicationChartListRelationFilter } from "../../nurseMedicationChart/base/NurseMedicationChartListRelationFilter";
import { NurseMonitoringChartListRelationFilter } from "../../nurseMonitoringChart/base/NurseMonitoringChartListRelationFilter";

@InputType()
class PatientWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  age?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  contactNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DoctorProgressNoteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DoctorProgressNoteListRelationFilter)
  @IsOptional()
  @Field(() => DoctorProgressNoteListRelationFilter, {
    nullable: true,
  })
  doctorProgressNotes?: DoctorProgressNoteListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumPatientGender,
  })
  @IsEnum(EnumPatientGender)
  @IsOptional()
  @Field(() => EnumPatientGender, {
    nullable: true,
  })
  gender?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => NurseMedicationChartListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NurseMedicationChartListRelationFilter)
  @IsOptional()
  @Field(() => NurseMedicationChartListRelationFilter, {
    nullable: true,
  })
  nurseMedicationCharts?: NurseMedicationChartListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => NurseMonitoringChartListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NurseMonitoringChartListRelationFilter)
  @IsOptional()
  @Field(() => NurseMonitoringChartListRelationFilter, {
    nullable: true,
  })
  nurseMonitoringCharts?: NurseMonitoringChartListRelationFilter;
}

export { PatientWhereInput as PatientWhereInput };