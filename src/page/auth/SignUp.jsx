import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import loginBg from "../../assets/image/loginBg.png";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { CustomInput } from "../../component/auth/CustomInput";
const inputs = [
  {
    name: "name",
    label: "Name",
    id: "name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    id: "email",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    id: "password",
    type: "password",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm-Password",
    id: "confirmPassword",
    type: "password",
    required: true,
  },
];
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formData, setformData] = useState(initialState);
  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password" || name === "confirmPassword") {
      setError({ password: false, confirmPassword: false });
    }
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== formData.password) {
      setError({ password: true, confirmPassword: true });
    } else {
      setError({ password: false, confirmPassword: false });
      console.log(formData);
    }
    console.log(formData);
  };
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
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            {inputs.map((input, index) => {
              return (
                <CustomInput
                  key={index}
                  {...input}
                  onChange={handleChange}
                  error={error[input.name]}
                  helperText={error[input.name] && "Passwords do not match"}
                />
              );
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
