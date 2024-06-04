import { Box, Typography } from "@mui/material";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  return (
    <Box
      height={"6vh"}
      display={"flex"}
      justifyContent={"space-between"}
      px={3}
      alignItems={"center"}
      bgcolor={"var(--bgColor)"}
    >
      <LocalHospitalIcon sx={{ color: "red", fontSize: "40px" }} />
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Typography sx={{ fontWeight: "bold", color: "var(--dark)" }}>
          Samikshya
        </Typography>
        <AccountBoxIcon sx={{ color: "var(--dark)", fontSize: "35px", cursor:"pointer" }} />
        <LogoutIcon sx={{ color: "var(--dark)",cursor:"pointer"  }}  />
      </Box>
    </Box>
  );
};

export default Header;
