import React from "react";
import Login from "./page/auth/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./page/auth/SignUp";
import Dashboard from "./page/dashboard/Dashboard";
import Main from "./component/main/MainLayout";
import PatientRegistration from "./page/patientRegistration/PatientRegistration";
import Appointment from "./page/appointment/Appointment";
import Billing from "./page/billing/Billing";
import ClinicalManagement from "./page/clinical/ClinicalManagement";
import ElectronicMedicalRecord from "./page/emr/ElectronicMedicalRecord";
import DoctorInformation from "./page/doctors/DoctorInformation";
import InPatient from "./page/inPatient/InPatient";
import OutPatient from "./page/outPatient/OutPatient";
import Patients from "./page/patients/Patients";
import Statistics from "./page/statistics/Statistics";
import Emergency from "./page/emergency/Emergency";
import Staffs from "./page/staffs/Staffs";
import Rosters from "./page/rosters/Rosters";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/patientRegistration" element={<PatientRegistration/>}/>
      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/billing" element={<Billing/>}/>
      <Route path="/clinical" element={<ClinicalManagement/>}/>
      <Route path="/emr" element={<ElectronicMedicalRecord/>}/>
      <Route path="/doctors" element={<DoctorInformation/>}/>
      <Route path="/inPatient" element={<InPatient/>}/>
      <Route path="/outPatient" element={<OutPatient/>}/>
      <Route path="/patients" element={<Patients/>}/>
      <Route path="/statistic" element={<Statistics/>}/>
      <Route path="/emergency" element={<Emergency/>}/>
     <Route path='/staffs' element={<Staffs/>}/>
     <Route path="/rosters" element={<Rosters/>}/>
    </Routes>
  );
};

export default App;
