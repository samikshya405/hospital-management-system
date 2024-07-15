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
// import CustomInput from "../component/auth/CustomInput";
import loginBg from "../../assets/image/loginBg.png";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { CustomInput, CustomSelect } from "../../component/auth/CustomInput";
import { fetchUserInfo, userLogin } from "../../utils/axiosHelper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { hideLoading, showLoading } from "../../redux/features/alertSlice";
const inputs = [
  {
    name: "department",
    label: "Select Department",
    id: "department",
    type: "select",
    required: true,

    option: [
      {
        name: "Receptionist",
      },
      {
        name: "Doctor",
      },
      {
        name: "Admin",
      },
    ],
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
];
const initialState = {
  department: "",
  email: "",
  password: "",
};
const login = () => {
  const [formData, setformData] = useState(initialState);
  const navigate = useNavigate();
  const [isInValid, setIsInvalid] = useState(false);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsInvalid(false);

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const loginPromise = userLogin(formData);
    toast.promise(loginPromise, {
      pending: "In Progress...",
    });
    const result = await loginPromise;
    console.log(result);
    if (result.status === "success") {
      navigate("/");
    }
    

    const {status,tokens} = result
    status === "success" ? navigate("/") : setIsInvalid(true);
    if(status === "success"){
      sessionStorage.setItem("accessJWT", tokens.accessJWT);
      localStorage.setItem("refreshJWT", tokens.refreshJWT)

    }
   const user = await fetchUserInfo();
   console.log("user",user);
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
            Log in
          </Typography>

          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            {isInValid && (
              <Typography p={1} color={"red"}>
                Invalid login Credentials !
              </Typography>
            )}
            {inputs.map((input, index) => {
              return (
                <div key={index}>
                  {input.type !== "select" ? (
                    <CustomInput {...input} onChange={handleChange} />
                  ) : (
                    <CustomSelect
                      input={input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              );
            })}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: "var(--primary)" }}
            >
              Log In
            </Button>
            <Typography align="center">
              <Link href="/signup" variant="body2" align="center">
                {"Don't have an account? Sign Up"}
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default login;
