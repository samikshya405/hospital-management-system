// PatientInformation.jsx

import React from 'react';
import MainLayout from '../../component/main/MainLayout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const patients = [
  { id: 1, name: 'Bibek Lama', condition: 'Flu', room: '101' },
  { id: 2, name: 'Suyog Thapa', condition: 'Pneumonia', room: '102' },
  { id: 3, name: 'Umesh Gurung', condition: 'Fracture', room: '103' },
  // Add more patients as needed
];

const PatientInformation = () => {
  return (
    <MainLayout title="Patient Information">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Room</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.id}</TableCell>
                <TableCell>
                  <Link sx={{textDecoration:"none"}} to={`/patient/${patient.id}`}>
                    {patient.name}
                  </Link>
                </TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>{patient.room}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export default PatientInformation;
