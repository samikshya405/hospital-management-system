import React from "react";
import MainLayout from "../../component/main/MainLayout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import registerForm from "../../assets/image/form.png";
import appointment from "../../assets/image/appointment.png";
import clinical from "../../assets/image/clinical.png";
import doctor from "../../assets/image/doctor.png";
import emergency from "../../assets/image/emergency.png";
import billing from "../../assets/image/billing.png";
import emr from '../../assets/image/emr.png'
import inPatient from '../../assets/image/inPatient.png'
import outPatient from '../../assets/image/outPatient.png'
import patient from '../../assets/image/patient.png'
import graph from '../../assets/image/graph.png'

const data = [
  {
    department: "Patient Registration Form",
    img: registerForm,
  },
  {
    department: "Appointment",
    img: appointment,
  },
  {
    department: "Clinical Management",
    img: clinical,
  },
  {
    department: "Doctor Information",
    img: doctor,
  },
  {
    department: "Emergency",
    img: emergency,
  },
  {
    department: "Electronic Medical Record",
    img: emr,
  },
  {
    department: "InPatient Management",
    img: inPatient,
  },
  {
    department: "OutPatient Management",
    img: outPatient,
  },
  
  

  {
    department: "Billing and Payment",
    img: billing,
  },
  {
    department: "Patient Information",
    img: patient,
  },
  {
    department:"Statistic and Reports",
    img:graph
  }
  
];

const Dashboard = () => {
  
  return (
    <MainLayout>
      <Grid container p={3} spacing={2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={2}
            
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{cursor:"pointer"}}
            // bgcolor={"red"}
          >
            <Box className="circle">
              <img
                src={item.img}
                alt={item.department}
                width={"90px"}
                style={{ overflow: "hidden" }}
              />
            </Box>
            <Typography textAlign={"center"} py={1} sx={{color:"var(--dark)"}}>{item.department}</Typography>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;
