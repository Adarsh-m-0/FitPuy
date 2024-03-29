import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Typography, Button, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    // Fetch weight data from your backend or mock data
    const mockWeightData = [
      { date: '2024-01-01', weight: 70 },
      { date: '2024-02-01', weight: 68 },
      { date: '2024-03-01', weight: 65 },
      { date: '2024-04-01', weight: 62 },
      { date: '2024-05-01', weight: 58 },
      { date: '2024-06-01', weight: 55 },
      { date: '2024-07-01', weight: 59 },
      { date: '2024-08-01', weight: 62 },
    ];
    setWeightData(mockWeightData);
  }, []);

  useEffect(() => {
    // Initialize chart when weightData is available
    if (weightData.length > 0) {
      const ctx = document.getElementById('weightChart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: weightData.map(data => data.date),
          datasets: [{
            label: 'Weight (kg)',
            data: weightData.map(data => data.weight),
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false,
            },
            legend: {
              labels: {
                color: '#333',
              }
            }
          }
        }
      });
    }
  }, [weightData]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" mb={2}>Weight Difference Over Time</Typography>
          <canvas id="weightChart" width="400" height="200"></canvas>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" mb={2}>Fitness Tips</Typography>
          <Typography variant="body1" mb={2}>
            1. Stay hydrated by drinking at least 8 glasses of water every day.
            <br />
            2. Incorporate a mix of cardio and strength training exercises into your routine.
            <br />
            3. Ensure you get enough sleep to aid muscle recovery and overall well-being.
            <br />
            4. Include plenty of fruits and vegetables in your diet for essential nutrients.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" component={Link} to="/bmi-calculator" color="primary" sx={{ marginRight: 2 }}>Go to BMI Calculator</Button>
        <Button variant="contained" component={Link} to="/calorie-tracker" color="primary">Go to Calorie Tracker</Button>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
