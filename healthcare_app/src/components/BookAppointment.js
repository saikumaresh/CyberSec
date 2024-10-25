import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';



const BookAppointment = () => {
  const [details, setDetails] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');

  const handleBookAppointment = async (e) => {
    e.preventDefault();

    try {
      // Vulnerable to SQL Injection (directly using user input in the SQL query)
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ details })
      });
      const message = await response.text();
      setBookingMessage(message); // Display unsanitized message (XSS vulnerability)
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Book an Appointment
        </Typography>
        <form onSubmit={handleBookAppointment}>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Appointment details"
          />
          <button type="submit">Book</button>
        </form>
        {/* Vulnerable to XSS attack: Displaying unsanitized content */}
        <div dangerouslySetInnerHTML={{ __html: bookingMessage }} />
      </Box>
    </Container>
  );
};

export default BookAppointment;
