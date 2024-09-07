'use client'

import React from 'react';
import { TextField, Typography, Box, Paper } from '@mui/material';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import { Clock, Dog, Wrench } from 'lucide-react';


function DogWalkCRM() {
  const handleLogin = () => {
    console.log('Login');
  };

  return (
    <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
      <Paper elevation={3} sx={{ maxWidth: '900px', width: '100%', display: 'flex', overflow: 'hidden' }}>
        {/* Left Side: CRM Info */}
        <Box bgcolor="darkorange" p={6} sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h3" component="h1" color="white" fontWeight="600" gutterBottom>
            Puplanner
          </Typography>
          <Typography variant="body1" color="white" mb={3} gutterBottom>
            Streamline your dog walking business with our easy-to-use CRM. Manage clients, schedules, and payments all in one place.
          </Typography>
          <Box>
            <Box mb={1} flex={1} display="flex" alignItems="center" gap={1} color="white">
            <Dog />
            <Typography variant="body1" color="white" gutterBottom>Track walks and client preferences</Typography>
            </Box>
            <Box mb={1} flex={1} display="flex" alignItems="center" gap={1} color="white">
            <Wrench />
            <Typography variant="body1" color="white" gutterBottom>Manage billing and payments</Typography>
            </Box>
            <Box mb={1} flex={1} display="flex" alignItems="center" gap={1} color="white">
            <Clock />
            <Typography variant="body1" color="white" gutterBottom>Schedule and organize routes</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side: Login Form */}
        <Box p={6} sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" component="h2" color="orange" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Login or sign up to get started
          </Typography>

          <Box mb={4}>
            <ButtonGroup />
          </Box>

          <form noValidate autoComplete="off">
            <Box mb={3}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                placeholder="m@example.com"
                InputProps={{
                  sx: {
                    '&.Mui-focused fieldset': {
                      borderColor: 'darkorange',
                    }
                  }
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                placeholder="Password"
                InputProps={{
                  sx: {
                    '&.Mui-focused fieldset': {
                      borderColor: 'darkorange',
                    }
                  }
                }}
              />
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              href="/bookings"
            >
              Login
            </Button>
          </form>

          <Typography variant="body2" color="textSecondary" mt={4} textAlign="center">
            Woof! Let’s get started with your dog walking business.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default DogWalkCRM;
