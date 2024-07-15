// DoctorProfile.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper, Typography, Avatar, Box } from '@mui/material';
import MainLayout from '../../component/main/MainLayout';

const doctors = [
  { id: 1, name: 'Bibek Lama', specialty: 'Cardiology', address: '123 Heart St.', age: '25 years', biography: '...', contact: '123-456-7890', image: '/images/john_doe.jpg' },
  { id: 2, name: 'Suyog Thapa', specialty: 'Neurology', address: '456 Brain Rd.', age: '34 years', biography: '...', contact: '987-654-3210', image: '/images/jane_smith.jpg' },
  { id: 3, name: 'Umesh Gurung', specialty: 'Pediatrics', address: '789 Kids Ave.', age: '44 years', biography: '...', contact: '555-123-4567', image: '/images/michael_brown.jpg' },
  // Add more doctors as needed
];

const PatientProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <Typography variant="h6">Doctor not found</Typography>;
  }

  return (
   <MainLayout>
     <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar alt={doctor.name} src={doctor.image} sx={{ width: 150, height: 150 }} />
          <Typography variant="h4">{doctor.name}</Typography>
          <Typography variant="h6">{doctor.specialty}</Typography>
          <Typography variant="body1">{doctor.address}</Typography>
          <Typography variant="body1">{doctor.experience}</Typography>
          <Typography variant="body1">{doctor.biography}</Typography>
          <Typography variant="body1">Contact: {doctor.contact}</Typography>
        </Box>
      </Paper>
    </Container>
   </MainLayout>
  );
};

export default PatientProfile;
