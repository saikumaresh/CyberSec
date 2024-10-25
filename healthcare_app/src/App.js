
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Telemedicine from './components/Telemedicine';
import Appointments from './components/Appointments';
import BookAppointment from './components/BookAppointment';
import TrackVitals from './components/TrackVitals';
import AuthScreen from './components/AuthScreen';
import Profile from './components/Profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#4caf50',
    },
  },
});

const isAuthenticated = () => {
};

const ProtectedRoute = ({ children }) => {
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/telemedicine" element={<ProtectedRoute><Telemedicine /></ProtectedRoute>} />
          <Route path="/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>} />
          <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
          <Route path="/track-vitals" element={<ProtectedRoute><TrackVitals /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
