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
<<<<<<< HEAD
import DoctorProfile from "./page/doctors/DoctorProfile";
import PatientInformation from "./page/patients/PatientInformation";
import PatientProfile from "./page/patients/PatientProfile";
=======
import PublicRoute from "./component/protectedRoute/PublicRoute";
import ProtectedRoutes from "./component/protectedRoute/ProtectedRoutes";
import AddStaff from "./component/staff/AddStaff";
import Setting from "./page/setting/Setting";
>>>>>>> aba68962e89c644385e601a220dc78aeec341463

const App = () => {
  return (
    <Routes>
<<<<<<< HEAD
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
      {/* <Route path="/patients" element={<Patients/>}/> */}
      <Route path="/statistic" element={<Statistics/>}/>
      <Route path="/emergency" element={<Emergency/>}/>
     <Route path='/staffs' element={<Staffs/>}/>
     <Route path="/rosters" element={<Rosters/>}/>
     <Route path="/doctor/:id" element={<DoctorProfile />} />
     <Route path="/patient/:id" element={<PatientProfile />} />
     <Route path="/patients" element={<PatientInformation />} />
=======
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/patientRegistration"
        element={
          <ProtectedRoutes>
            <PatientRegistration />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/appointment"
        element={
          <ProtectedRoutes>
            <Appointment />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/billing"
        element={
          <ProtectedRoutes>
            <Billing />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/clinical"
        element={
          <ProtectedRoutes>
            <ClinicalManagement />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/emr"
        element={
          <ProtectedRoutes>
            <ElectronicMedicalRecord />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/doctors"
        element={
          <ProtectedRoutes>
            <DoctorInformation />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/inPatient"
        element={
          <ProtectedRoutes>
            <InPatient />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/outPatient"
        element={
          <ProtectedRoutes>
            <OutPatient />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/patients"
        element={
          <ProtectedRoutes>
            <Patients />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/statistic"
        element={
          <ProtectedRoutes>
            <Statistics />
          </ProtectedRoutes>
        }
      />
      <Route path="/emergency" element={<Emergency />} />
      <Route
        path="/staffs"
        element={
          <ProtectedRoutes>
            <Staffs />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/rosters"
        element={
          <ProtectedRoutes>
            <Rosters />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/addStaff"
        element={
          <ProtectedRoutes>
            <AddStaff />
          </ProtectedRoutes>
        }
      />
      <Route path="/setting" element={<ProtectedRoutes><Setting/></ProtectedRoutes>}/>
>>>>>>> aba68962e89c644385e601a220dc78aeec341463
    </Routes>
  );
};

export default App;
