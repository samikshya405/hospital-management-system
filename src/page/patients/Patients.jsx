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
import React from "react";

import MainLayout from "../../component/main/MainLayout";
import { Link } from "react-router-dom";

const Patients = () => {
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
              <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                 <Link sx={{textDecoration:"none"}} to={`/patient/${1}`}>
                    view profile
                  </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                 <Link sx={{textDecoration:"none"}} to={`/patient/${1}`}>
                    view profile
                  </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                 <Link sx={{textDecoration:"none"}} to={`/patient/${1}`}>
                    view profile
                  </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                 <Link sx={{textDecoration:"none"}} to={`/patient/${1}`}>
                    view profile
                  </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                 <Link sx={{textDecoration:"none"}} to={`/patient/${1}`}>
                    view profile
                  </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
     
    </MainLayout>
  );
};

export default Patients;
