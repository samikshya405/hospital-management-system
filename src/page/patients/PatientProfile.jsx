// DoctorProfile.jsx

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Paper, Typography, Avatar, Box, Button, IconButton } from '@mui/material';
import MainLayout from '../../component/main/MainLayout';
import { getAllPatient } from '../../utils/axiosHelper';

import female from '../../assets/image/female.jpg'

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



const PatientProfile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [openPersonal, setOpenPersonal] = useState(false);
  const handleOpenPersonal = () => setOpenPersonal(true);
  const handleClosePersonal = () => setOpenPersonal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [patientList, setPatientList] = useState([])
  


  const getPatientList =async()=>{
    const data = await getAllPatient()
    setLoading(false)
    // console.log(data);
    setPatientList(data.result)
  }

  useEffect(()=>{
    getPatientList()

  },[])

  const patientDetails = patientList.find(patient=>patient._id === id)
  console.log(patientDetails);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!patientList) {
    return <Typography variant="h6">Patient not found</Typography>;
  }

  return (
   <MainLayout title="Profile">
   <Box sx={{ px: 2 }}>
        <Link to={"/patients"}>
          <Button style={{ color: "var(--primary)" }}>
            {" "}
            <ArrowBackIcon />
            Back
          </Button>
        </Link>
        <Paper
          sx={{
            height: "30vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            p: 2,
            gap: "40px",
            position: "relative",
          }}
        >
          <Box className="profileImageContainer">
            <img src={female} className="profileImage" />
          </Box>

          <Box sx={{ width: "calc(100% - 256px)" }}>
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "var(--dark)",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "20px",
                p: 3,
              }}
            >
              {patientDetails?.fName} {patientDetails?.mName}{" "}
              {patientDetails?.lName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 3,
              }}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                <span style={{ fontWeight: "bold" }}>Disease:</span>{" "}
                Typhyoid
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                {patientDetails?.email}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
                7878708090
              </Typography>
            </Box>
          </Box>
          <Box className="edit">
            <IconButton onClick={handleOpen}>
              <EditIcon sx={{ color: "blue", fontSize: "30px" }} />
            </IconButton>
          </Box>
          
        </Paper>
        <Paper sx={{ minHeight: "50vh", mt: 3, p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Basic Information
            </Typography>
            
          </Box>
          <Box sx={{ display: "flex", pt: 1, pb: 3, gap: "95px" }}>
            <Box>
              <Typography
                sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
              >
                Allergy
              </Typography>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  bgcolor: "var(--secondary)",
                  color: "var(--dark)",
                  borderRadius: "5px",
                }}
              >
                {" "}
                Unknown
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
              >
                Diagnosis
              </Typography>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  bgcolor: "var(--secondary)",
                  color: "var(--dark)",
                  borderRadius: "5px",
                }}
              >
                {" "}
               Unknown
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
              >
                Patient ID
              </Typography>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  bgcolor: "var(--secondary)",
                  color: "var(--dark)",
                  borderRadius: "5px",
                }}
              >
                {" "}
                234YT45
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
              >
                SSN
              </Typography>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  bgcolor: "var(--secondary)",
                  color: "var(--dark)",
                  borderRadius: "5px",
                }}
              >
                {" "}
                12345
              </Box>
              </Box>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px", pt: 1 }}>
                Personal Information
              </Typography>
              <Box sx={{ display: "flex", pt: 1, pb: 3, gap: "95px" }}>
                <Box>
                  <Typography
                    sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
                  >
                    Date of Birth
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    {patientDetails.dob.slice(0,10)} <CalendarMonthIcon />
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
                  >
                    Address
                  </Typography>
                  <Typography sx={{ display: "flex" }}>Sydney</Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <IconButton onClick={handleOpenPersonal}>
                <EditIcon sx={{ color: "blue", fontSize: "30px" }} />
              </IconButton>
            </Box>
            
          </Box>
          <hr />
          
        </Paper>
      </Box> 


    
   </MainLayout>
  );
};

export default PatientProfile;
