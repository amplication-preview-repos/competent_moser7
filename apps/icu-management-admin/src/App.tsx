import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NurseMonitoringChartList } from "./nurseMonitoringChart/NurseMonitoringChartList";
import { NurseMonitoringChartCreate } from "./nurseMonitoringChart/NurseMonitoringChartCreate";
import { NurseMonitoringChartEdit } from "./nurseMonitoringChart/NurseMonitoringChartEdit";
import { NurseMonitoringChartShow } from "./nurseMonitoringChart/NurseMonitoringChartShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { NurseMedicationChartList } from "./nurseMedicationChart/NurseMedicationChartList";
import { NurseMedicationChartCreate } from "./nurseMedicationChart/NurseMedicationChartCreate";
import { NurseMedicationChartEdit } from "./nurseMedicationChart/NurseMedicationChartEdit";
import { NurseMedicationChartShow } from "./nurseMedicationChart/NurseMedicationChartShow";
import { DoctorProgressNoteList } from "./doctorProgressNote/DoctorProgressNoteList";
import { DoctorProgressNoteCreate } from "./doctorProgressNote/DoctorProgressNoteCreate";
import { DoctorProgressNoteEdit } from "./doctorProgressNote/DoctorProgressNoteEdit";
import { DoctorProgressNoteShow } from "./doctorProgressNote/DoctorProgressNoteShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ICU Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="NurseMonitoringChart"
          list={NurseMonitoringChartList}
          edit={NurseMonitoringChartEdit}
          create={NurseMonitoringChartCreate}
          show={NurseMonitoringChartShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="NurseMedicationChart"
          list={NurseMedicationChartList}
          edit={NurseMedicationChartEdit}
          create={NurseMedicationChartCreate}
          show={NurseMedicationChartShow}
        />
        <Resource
          name="DoctorProgressNote"
          list={DoctorProgressNoteList}
          edit={DoctorProgressNoteEdit}
          create={DoctorProgressNoteCreate}
          show={DoctorProgressNoteShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
