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
import { NurseMonitoringChartWhereInput } from "./NurseMonitoringChartWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class NurseMonitoringChartCountArgs {
  @ApiProperty({
    required: false,
    type: () => NurseMonitoringChartWhereInput,
  })
  @Field(() => NurseMonitoringChartWhereInput, { nullable: true })
  @Type(() => NurseMonitoringChartWhereInput)
  where?: NurseMonitoringChartWhereInput;
}

export { NurseMonitoringChartCountArgs as NurseMonitoringChartCountArgs };
