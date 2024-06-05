import React from "react";
import MainLayout from "../../component/main/MainLayout";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import {
  PayersInformation,
  PersonalDetails,
  homeAddress,
} from "../../component/main/dataSet";

const PatientRegistration = () => {
  return (
    <MainLayout title={"Patient Registration"}>
      <Box p={1}>
        <Typography pt={3}>Personal Details</Typography>
        <hr />
        <Grid
          container
          component={"form"}
          pt={1}
          columnSpacing={5}
          rowSpacing={1}
        >
          {PersonalDetails.map((input, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                className="inputgrp"
              >
                {input.required ? (
                  <InputLabel>{input.label}*:</InputLabel>
                ) : (
                  <InputLabel>{input.label}:</InputLabel>
                )}

                <input className="customInput" type="text" />
              </Grid>
            );
          })}
        </Grid>

        <Typography pt={3}>Home Address</Typography>
        <hr />
        <Grid
          container
          component={"form"}
          pt={1}
          columnSpacing={5}
          rowSpacing={1}
        >
          {homeAddress.map((input, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                className="inputgrp"
              >
                {input.required ? (
                  <InputLabel>{input.label}*:</InputLabel>
                ) : (
                  <InputLabel>{input.label}:</InputLabel>
                )}

                <input className="customInput" type="text" />
              </Grid>
            );
          })}
        </Grid>
        <Typography pt={3}>Payers Information</Typography>
        <hr />
        <Grid
          container
          component={"form"}
          pt={1}
          columnSpacing={5}
          rowSpacing={1}
        >
          {PayersInformation.map((input, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                className="inputgrp"
              >
                {input.required ? (
                  <InputLabel>{input.label}*:</InputLabel>
                ) : (
                  <InputLabel>{input.label}:</InputLabel>
                )}

                <input className="customInput" type="text" />
              </Grid>
            );
          })}
        </Grid>
        <Typography pt={3}>Payers Information</Typography>
        <hr />
        <Grid
          container
          component={"form"}
          pt={1}
          columnSpacing={5}
          rowSpacing={1}
        >
          {PayersInformation.map((input, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                className="inputgrp"
              >
                {input.required ? (
                  <InputLabel>{input.label}*:</InputLabel>
                ) : (
                  <InputLabel>{input.label}:</InputLabel>
                )}

                <input className="customInput" type="text" />
              </Grid>
            );
          })}
        </Grid>
        <Box textAlign={"right"}>
          <Button
            variant="contained"
            sx={{ m: 5, width: "200px" }}
            style={{ background: "var(--primary)" }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PatientRegistration;
