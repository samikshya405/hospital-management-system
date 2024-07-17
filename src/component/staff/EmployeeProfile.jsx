import React, { useEffect, useState } from "react";
import MainLayout from "../main/MainLayout";
import { Link, useParams } from "react-router-dom";
import { getAllStaff } from "../../utils/axiosHelper";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import female from "../../assets/image/female.jpg";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AlarmIcon from "@mui/icons-material/Alarm";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EmployeeProfile = () => {
  const { id } = useParams();
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAllEmployee = async () => {
    const result = await getAllStaff();
    setLoading(false);
    setEmployeeList(result.employeeList);
  };
  const employeeDetails = employeeList.find((employee) => employee._id === id);
  console.log(employeeDetails);
  useEffect(() => {
    getAllEmployee();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!employeeDetails) {
    return <div>Employee not found</div>;
  }
  return (
    <MainLayout title={`${employeeDetails.fName}'s Profile`}>
      <Box sx={{ px: 2 }}>
        <Link to={'/staffs'}>
          <Button>
            {" "}
            <ArrowBackIcon />
            Go Back
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
          }}
        >
          <Box className="profileImageContainer">
            <img src={female} className="profileImage" />
          </Box>
          {/* <IconButton className="editProfile">
                <EditLocationAltIcon sx={{color:"green"}}/>
            </IconButton> */}
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
              {employeeDetails.fName} {employeeDetails.mName}{" "}
              {employeeDetails.lName}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 3 }}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                <span style={{ fontWeight: "bold" }}>Role:</span>{" "}
                {employeeDetails?.department}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                {employeeDetails?.email}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
                {employeeDetails?.phone}
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper sx={{ minHeight: "50vh", mt: 3, p: 2 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Basic Information
          </Typography>
          <Box sx={{ display: "flex", pt: 1, pb: 3, gap: "95px" }}>
            <Box>
              <Typography
                sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
              >
                Hired Date
              </Typography>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {" "}
                August 15 2015
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
              >
                Worked For
              </Typography>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {" "}
                August 15 2015
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ color: "var(--dark)", fontWeight: "bold", pb: 1 }}
              >
                Employee ID
              </Typography>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {" "}
                August 15 2015
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
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {" "}
                August 15 2015
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
                    67/23/2345 <CalendarMonthIcon />
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
              <IconButton>
                <EditIcon sx={{ color: "blue", fontSize: "30px" }} />
              </IconButton>
            </Box>
          </Box>
          <hr />
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", pt: 1 }}>
            Occupation Information
          </Typography>
          <Box sx={{ p: 1, display: "flex", gap: "60px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box className="occupation">
                <AlarmIcon className="clock" sx={{ fontSize: "40px" }} />
              </Box>
              <Typography sx={{ textTransform: "capitalize" }}>
                {employeeDetails.employmentType}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box className="occupation">
                <CastForEducationIcon
                  className="clock"
                  sx={{ fontSize: "40px" }}
                />
              </Box>
              <Typography sx={{ textTransform: "capitalize" }}>
                {employeeDetails.department}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box className="occupation">
                <EditLocationAltIcon
                  className="clock"
                  sx={{ fontSize: "40px" }}
                />
              </Box>
              <Typography>Sydney</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </MainLayout>
  );
};

export default EmployeeProfile;
