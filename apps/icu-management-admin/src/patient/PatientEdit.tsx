import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { DoctorProgressNoteTitle } from "../doctorProgressNote/DoctorProgressNoteTitle";
import { NurseMedicationChartTitle } from "../nurseMedicationChart/NurseMedicationChartTitle";
import { NurseMonitoringChartTitle } from "../nurseMonitoringChart/NurseMonitoringChartTitle";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="contactNumber" source="contactNumber" />
        <ReferenceArrayInput
          source="doctorProgressNotes"
          reference="DoctorProgressNote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DoctorProgressNoteTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="nurseMedicationCharts"
          reference="NurseMedicationChart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NurseMedicationChartTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="nurseMonitoringCharts"
          reference="NurseMonitoringChart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NurseMonitoringChartTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
