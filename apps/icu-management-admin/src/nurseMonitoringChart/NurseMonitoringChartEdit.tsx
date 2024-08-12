import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const NurseMonitoringChartEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bp" source="bp" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="spo2" source="spo2" />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
