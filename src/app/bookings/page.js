'use client'

import React, { useState } from "react";
import { TextField, MenuItem, Typography, Box, Paper, Grid } from "@mui/material";
import Button from "../Button";

function DogWalkBooking() {
  const [formData, setFormData] = useState({
    dog: "",
    date: "",
    time: "",
    duration: "30 minutes",
    location: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center" bgcolor="#FFF7ED">
      <Paper elevation={3} sx={{ p: 4, maxWidth: '900px', width: '100%' }}>
        <Typography variant="h3" color="orange" fontWeight="600" gutterBottom>
          🐶 Book a Dog Walk
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          Schedule a walk for your furry friend
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Dog and Date Selection */}
          <Grid container spacing={3} mb={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                🐕 Select Your Dog
              </Typography>
              <TextField
                select
                name="dog"
                value={formData.dog}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                placeholder="Select a dog"
              >
                <MenuItem value="">Select a dog</MenuItem>
                <MenuItem value="dog1">Dog 1</MenuItem>
                <MenuItem value="dog2">Dog 2</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                📅 Select Date
              </Typography>
              <TextField
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>

          {/* Time and Duration Selection */}
          <Grid container spacing={3} mb={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                ⏰ Select Time
              </Typography>
              <TextField
                select
                name="time"
                value={formData.time}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              >
                <MenuItem value="">Select time</MenuItem>
                <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                <MenuItem value="1:00 PM">1:00 PM</MenuItem>
                <MenuItem value="3:00 PM">3:00 PM</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                ⏳ Walk Duration (minutes)
              </Typography>
              <TextField
                select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              >
                <MenuItem value="30 minutes">30 minutes</MenuItem>
                <MenuItem value="60 minutes">60 minutes</MenuItem>
                <MenuItem value="90 minutes">90 minutes</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          {/* Pickup Location */}
          <Box mb={3}>
            <Typography variant="body1" gutterBottom>
              📍 Pickup Location
            </Typography>
            <TextField
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter pickup address"
              fullWidth
              variant="outlined"
            />
          </Box>

          {/* Special Instructions */}
          <Box mb={3}>
            <Typography variant="body1" gutterBottom>
              ⚠️ Special Instructions
            </Typography>
            <TextField
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Any special instructions for the walk?"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Box>

          {/* Submit Button */}
          <Button href="/bookingreview">Book Walk</Button>
        </form>
      </Paper>
    </Box>
  );
}

export default DogWalkBooking;
