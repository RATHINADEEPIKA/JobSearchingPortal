// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Contact = () => {
  const [mail, setMail] = useState('');
  const [feed, setFeed] = useState('');

  const handleFeedback = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8081/addfed', {
        email: mail,
        feedback: feed,
      })
      .then(() => {
        alert('Feedback added');
      })
      .catch((error) => {
        console.log('Error occurred while submitting', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Card elevation={4} style={{ padding: '16px', width: '100%' }}>
          <div className="content-container">
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <form className="contact-form" onSubmit={handleFeedback}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
                margin="normal"
              />
              <TextField
                label="Feedback"
                variant="outlined"
                fullWidth
                placeholder="Enter your feedback"
                value={feed}
                onChange={(e) => setFeed(e.target.value)}
                required
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '16px' }}
              >
                Submit your feedback
              </Button>
            </form>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default Contact;
