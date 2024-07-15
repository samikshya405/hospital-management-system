import { Box, Button, Grid, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomInput, CustomSelect } from "../auth/CustomInput";
import { personalDetails, staffDetails } from "../main/dataSet";
import { Form } from "react-router-dom";
const initialState = {
  fName: "",
  mName: "",
  lName: "",
  dob: null,
  gender: "",
  maritalStatus: "Single",
  occupation: "",
  language: "",
  religion: "",
  nationality: "",
  email: "",
};

const EmployeeOnboardingForm = () => {
  const [formData, setformData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {};
  return (
    <Box
      width={"80%"}
      margin={"0 auto"}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Box py={2}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", my: 2 }}>
          Employee Details
        </Typography>
        <Grid container columnSpacing={4} rowSpacing={1}>
          {staffDetails.map(({ label, ...input }, i) => {
            return (
              <Grid item xs={12} md={6} key={input.id + i}>
                {input.type !== "select" ? (
                  <>
                    <InputLabel>{label}</InputLabel>
                    <CustomInput
                      key={input.id}
                      {...input}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <InputLabel>{label}</InputLabel>
                    <CustomSelect
                      input={input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  </>
                )}
              </Grid>
            );
          })}
        </Grid>
        <Box textAlign={"end"}>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2, paddingX: 5 }}
            style={{ background: "var(--primary)" }}
            type="submit"
          >
            Create New Employee
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeOnboardingForm;
