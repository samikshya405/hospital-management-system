import React from "react";

import { Box, Typography } from "@mui/material";

import { Login } from "@mui/icons-material";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <Box height={"94vh"} bgcolor={"var(--secondary)"}  display={"flex"}>
        <Sidebar />
        <Box width={"95vw"}>
          <Box height={"46px"} width={"100%"} display={"flex"} alignItems={"center"} >
            <Typography paddingLeft={1} sx={{fontWeight:"bold", color:"var(--dark)"}}>Dashboard</Typography>

          </Box>
          <Box height={"calc(100% - 92px)"} bgcolor={"var(--bgColor)"} sx={{margin:"0 8px"}} >
            {children}

          </Box>
        </Box>
      
      </Box>
    </>
  );
};

export default MainLayout;
