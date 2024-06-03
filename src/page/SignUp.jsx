import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import CustomInput from "../component/auth/CustomInput";
import loginBg from "../assets/image/loginBg.png";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
const inputs = [
  {
    name: "name",
    label: "Name",
    id: "name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    id: "email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    id: "password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm-Password",
    id: "confirmPassword",
    type: "password",
  },
];
const SignUp = () => {
  return (
    <Box padding={3}>
      <Box
        height="10vh"
        display="flex"
        justifyContent="end"
        alignContent="center"
      >
        <Box display="flex">
          <LocalHospitalIcon style={{ color: "var(--primary)" }} />{" "}
          <Typography>Hospital Management System</Typography>
        </Box>
      </Box>
      <Grid container height="80vh" alignItems="center" spacing={5}>
        <Grid item xs={12} sm={12} md={5} lg={6}>
          <img src={loginBg} alt="hospital image" width="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={6}>
          <Typography align="center" component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            {inputs.map((input, index) => {
              return <CustomInput key={index} {...input} />;
            })}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: "var(--primary)" }}
            >
              Sign Up
            </Button>
            <Typography align="center">
              <Link href="/" variant="body2" align="center">
                {"Already have an account? Login In"}
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
