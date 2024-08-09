import { Box, Button, Grid, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { homeAddress } from "../main/dataSet";
import { CustomInput, CustomSelect } from "../auth/CustomInput";
import { getPatientDetails } from "../../redux/features/patientSlice";
import { useDispatch } from "react-redux";

const initialState = {
  patientStreetAddress: "",
  patientStreetAddressLine2: "",
  patientCity: "",
  patientState: null,
  patientpostal: "",
};
const HomeAddress = ({ activeForm, setActiveForm }) => {
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleNext = (e) => {
    e.preventDefault();
    setActiveForm(activeForm + 1);

    dispatch(getPatientDetails(formData))
  };
  return (
    <Box component={"form"} onSubmit={handleNext}>
      <Box py={2}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", my: 2 }}>
          Home Address
        </Typography>
        <Grid container columnSpacing={4} rowSpacing={1}>
          {homeAddress.map(({ label, ...input }, i) => {
            return (
              <Grid item xs={12} md={6} key={input.id + i}>
                {input.type !== "select" ? (
                  <>
                    {input.required ? (
                      <InputLabel>{label}*</InputLabel>
                    ) : (
                      <InputLabel>{label}</InputLabel>
                    )}

                    <CustomInput
                      key={input.id}
                      {...input}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    {input.required ? (
                      <InputLabel>{label}*</InputLabel>
                    ) : (
                      <InputLabel>{label}</InputLabel>
                    )}
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
      </Box>
      <Box textAlign={"end"}>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2, paddingX: 5 }}
          style={{ background: "var(--primary)" }}
          type="submit"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default HomeAddress;
