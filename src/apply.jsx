// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Typography, TextField, Button, AppBar, Toolbar, Grid, Paper } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Apply = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    resume: Yup.mixed().required('Resume file is required'),
    coverLetter: Yup.string().required('Cover Letter is required'),
    // Add more validation rules for other fields
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      resume: null,
      coverLetter: '',
      // Add more fields here with initial values
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission, you can send the data to the server here
      console.log(values);
    },
  });

  return (
    <>
      <AppBar position="static">
      <Toolbar>
          <Typography variant="h6">JOB APPLICATION FORM</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
       
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}><br></br>
            <Typography variant="h6">Fullname</Typography>
              <TextField
                label="Full Name"
                name="fullName"
                fullWidth
                margin="normal"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>
            <Grid item xs={12} sm={6}><br></br>
            <Typography variant="h6">Email</Typography>

              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6">Choose Resume File:</Typography><br></br>

              <input
                type="file"
                id="resume"
                name="resume"
                onChange={(event) => formik.setFieldValue("resume", event.currentTarget.files[0])}
              />
              {formik.errors.resume ? (
                <Typography variant="caption" color="error">
                  {formik.errors.resume}
                </Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6">Write a coverLetter:</Typography>

              <TextField
                label="Cover Letter"
                name="coverLetter"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={formik.values.coverLetter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.coverLetter && Boolean(formik.errors.coverLetter)}
                helperText={formik.touched.coverLetter && formik.errors.coverLetter}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit Application
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Apply;
