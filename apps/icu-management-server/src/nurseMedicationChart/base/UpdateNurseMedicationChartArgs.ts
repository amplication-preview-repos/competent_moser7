/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NurseMedicationChartWhereUniqueInput } from "./NurseMedicationChartWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NurseMedicationChartUpdateInput } from "./NurseMedicationChartUpdateInput";

@ArgsType()
class UpdateNurseMedicationChartArgs {
  @ApiProperty({
    required: true,
    type: () => NurseMedicationChartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NurseMedicationChartWhereUniqueInput)
  @Field(() => NurseMedicationChartWhereUniqueInput, { nullable: false })
  where!: NurseMedicationChartWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NurseMedicationChartUpdateInput,
  })
  @ValidateNested()
  @Type(() => NurseMedicationChartUpdateInput)
  @Field(() => NurseMedicationChartUpdateInput, { nullable: false })
  data!: NurseMedicationChartUpdateInput;
}

export { UpdateNurseMedicationChartArgs as UpdateNurseMedicationChartArgs };
