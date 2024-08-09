import {
  Box,
  Button,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { emergencyContact } from "../main/dataSet";
import { CustomInput, CustomSelect } from "../auth/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { getPatientDetails } from "../../redux/features/patientSlice";
import { postNewPatient } from "../../utils/axiosHelper";

const initialState = {
  emergencyfName: "",
  emergencylName: "",
  emergencyRelation: "",
  emergencyNumber: "",
  emergencyStreetAddress: "",
  emergencyStreetAddressLine2: "",
  emergencyCity: "",
  emergencyState: null,
  emergencyPostal: "",
};

const EmergencyContact = ({ activeForm, setActiveForm }) => {
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const { patient } = useSelector((state) => state.patient);
  console.log(patient);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();

    // Dispatch the action to update the Redux store with the form data
    dispatch(getPatientDetails(formData));

    // Prepare the data to be posted
    const patientDetails = { ...patient, ...formData };

    // Post the data and handle the promise with toast notifications
    try {
      const addPatientPromise = postNewPatient(patientDetails);

      toast.promise(addPatientPromise, {
        pending: "In Progress...",
      });
      const data = await addPatientPromise;

      if (data.status === "success") {
        toast.success("New patient has been created", {
          hideProgressBar: true,
          position: "top-center",
        });

        
        // Move to the next form
        setActiveForm(activeForm + 1);
      } else {
        toast.error("Failed to create new patient", {
          hideProgressBar: true,
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("An error occurred while creating the patient", {
        hideProgressBar: true,
        position: "top-center",
      });
    }
  };

  return (
    <Box component={"form"} onSubmit={handleNext}>
      <Box py={2}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", my: 2 }}>
          Emergency Contact
        </Typography>
        <Grid container columnSpacing={4} rowSpacing={1}>
          {emergencyContact.map(({ label, ...input }, i) => {
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

export default EmergencyContact;
