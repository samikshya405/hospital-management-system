import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/features/userSlice";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut=()=>{
    sessionStorage.setItem("accessJWT", '');
      localStorage.setItem("refreshJWT", '');
      dispatch(signOut());
      navigate('/login')
  }
  return (
    <Box
      height={"6vh"}
      display={"flex"}
      justifyContent={"space-between"}
      px={2}
      alignItems={"center"}
    >
      <LocalHospitalIcon sx={{ color: "red", fontSize: "40px" }} />
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Typography sx={{ fontWeight: "bold", color: "var(--dark)" }}>
          Samikshya
        </Typography>
       
        <AccountBoxIcon
          sx={{ color: "var(--dark)", fontSize: "35px", cursor: "pointer" }}
        />
         <IconButton onClick={handleSignOut}>
          <LogoutIcon sx={{ color: "var(--dark)", cursor: "pointer" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
