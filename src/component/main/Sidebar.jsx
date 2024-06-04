import { Box, Stack } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";


const Sidebar = () => {
  return (
    <Box width={"5vw"}  height={"100%"} bgcolor={"var(--sidebar)"} display={"flex"} flexDirection={"column"}  alignItems={"center"} >
      <Box width={"100%"} bgcolor={"var(--dark)"} display={"flex"} justifyContent={"center"} py={1}>
        <HomeIcon  sx={{color:"var(--activeMenu)", fontSize:"30px"}} />
      </Box>
      <Box width={"100%"}  display={"flex"} justifyContent={"center"} py={1}>
        <AssignmentSharpIcon sx={{color:"var(--inactiveMenu)", fontSize:"30px"}} />
      </Box>
      <Box width={"100%"}  display={"flex"} justifyContent={"center"} py={1}>
        <CalendarMonthIcon  sx={{color:"var(--inactiveMenu)",fontSize:"30px"}}  />
      </Box>
      <Box width={"100%"}  display={"flex"} justifyContent={"center"} py={1}>
        <PaidIcon  sx={{color:"var(--inactiveMenu)",fontSize:"30px"}}  />
      </Box>
    </Box>
  );
};

export default Sidebar;
