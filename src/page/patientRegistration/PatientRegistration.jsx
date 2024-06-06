import React, { useEffect, useState } from "react";
import MainLayout from "../../component/main/MainLayout";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

import ProgressBar from "./ProgressBar";
import PersonalDetailsForm from "../../component/patients/PersonalDetailsForm";
import HomeAddress from "../../component/patients/HomeAddress";
import EmergencyContact from "../../component/patients/EmergencyContact";
import Confirm from "../../component/patients/Confirm";

const formList = [PersonalDetailsForm, HomeAddress, EmergencyContact, Confirm];

const PatientRegistration = () => {
  const [activeForm, setActiveForm] = useState(0);

  const ActiveFormComponent = formList[activeForm];
  return (
    <MainLayout title={"Patient Registration"}>
      <Box
        width={"80%"}
        margin={"0 auto"}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProgressBar activeForm={activeForm} setActiveForm={setActiveForm} />
        

        <ActiveFormComponent
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />
      </Box>
    </MainLayout>
  );
};

export default PatientRegistration;
