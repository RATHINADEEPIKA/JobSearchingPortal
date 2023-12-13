// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from '@mui/material';

function AdminPage() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual URL of your backend API endpoint
    axios
      .get('http://localhost:8081/getfed')
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ADMIN PAGE</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        <Paper elevation={3}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>EMAIL</b></TableCell>
                  <TableCell><b>FEEDBACK</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbackData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.feedback}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}

export default AdminPage;
