import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import MainLayout from "../../component/main/MainLayout";
import { Link } from "react-router-dom";
import { getAllPatient } from "../../utils/axiosHelper";

const Patients = () => {
  const [patientList, setPatientList] = useState([])


  const getPatientList =async()=>{
    const data = await getAllPatient()
    console.log(data);
    setPatientList(data.result)
  }

  useEffect(()=>{
    getPatientList()

  },[])
  return (
    <MainLayout title={"Patient Information"}>
      <Box sx={{p:1, m:1}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>D.O.B</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              {/* <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell> */}
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              patientList.map((patient)=>{
                return <TableRow key={patient._id}>
                <TableCell>{patient.fName} {patient.mName} {patient.lName}</TableCell>
                <TableCell>{patient?._doc?.dob.slice(0,10)}</TableCell>
                <TableCell>{patient.email}</TableCell>
                {/* <TableCell>{patient.phone}</TableCell> */}
                <TableCell>
                   <Link sx={{textDecoration:"none"}} to={`/patient/${patient?._doc?._id}`}>
                      view profile
                    </Link>
                </TableCell>
              </TableRow>
              })
            }
           
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
     
    </MainLayout>
  );
};

export default Patients;
