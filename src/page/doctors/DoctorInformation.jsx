// DoctorInformation.jsx

import React from 'react';
import MainLayout from '../../component/main/MainLayout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const doctors = [
  { id: 1, name: 'Dr. Aric Lama', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Sami Kharel', specialty: 'Neurology' },
  { id: 3, name: 'Dr. Suraj Raut', specialty: 'Pediatrics' },
  // Add more doctors as needed
];

const DoctorInformation = () => {
  return (
    <MainLayout title="Doctor Information">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Specialty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.id}</TableCell>
                <TableCell>
                  <Link sx={{textDecoration:"none"}} component={RouterLink} to={`/doctor/${doctor.id}`}>
                    {doctor.name}
                  </Link>
                </TableCell>
                <TableCell>{doctor.specialty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export default DoctorInformation;
