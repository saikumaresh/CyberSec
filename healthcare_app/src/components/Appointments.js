import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';



const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from SQL-based backend (vulnerable to SQL injection)
    fetch('/api/appointments')
      .then(response => response.json())
      .then(data => setAppointments(data));
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Upcoming Appointments
      </Typography>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>{appointment.details}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Appointments;
