// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { TextField, Button, Container, Typography, Grid } from "@mui/material";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useSelector } from 'react-redux';

// // import Card from '@mui/material/Card';
// // import CardMedia from '@mui/material/CardMedia';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// import {Link as Defpath} from 'react-router-dom';
// const pages = ['Joblistingss' ,'Schedule', 'Chat'];
// const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login as Admin', path: '/admin' },{ label: 'Login as Company', path: '/company' },{ label: 'Login as job seekers', path: '/signin' }];
// // const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget);
// //   };
// //   const handleOpenUserMenu = (event) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

// //   const handleCloseNavMenu = () => {
// //     setAnchorElNav(null);
// //   };

// //   const handleCloseUserMenu = () => {
// //     setAnchorElUser(null);
 
// //   };
 
// const JobPostingForm = () => {
//     const username = useSelector((state) => state.username);
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
 
//   };
//   const [jobTitle, setJobTitle] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [jobLocation, setJobLocation] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Here, you can implement the logic to submit the job posting data to the server
//     // For this example, we'll just display the data in the console
//     console.log("Job Title:", jobTitle);
//     console.log("Job Description:", jobDescription);
//     console.log("Job Location:", jobLocation);
//   };

//   return (
//     <><AppBar position="static">
//           <Container maxWidth="xl">
//               <Toolbar disableGutters>
//                   <WorkHistoryTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                   <Typography
//                       variant="h6"
//                       noWrap
//                       component="a"
//                       href="/"
//                       sx={{
//                           mr: 2,
//                           display: { xs: 'none', md: 'flex' },
//                           fontFamily: 'monospace',
//                           fontWeight: 700,
//                           letterSpacing: '.3rem',
//                           color: 'inherit',
//                           textDecoration: 'none',
//                       }}
//                   >
//                       JOBHUB
//                   </Typography>

//                   <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                       <IconButton
//                           size="large"
//                           aria-label="account of current user"
//                           aria-controls="menu-appbar"
//                           aria-haspopup="true"
//                           onClick={handleOpenNavMenu}
//                           color="inherit"
//                       >
//                           <MenuIcon />
//                       </IconButton>
//                       <Menu
//                           id="menu-appbar"
//                           anchorEl={anchorElNav}
//                           anchorOrigin={{
//                               vertical: 'bottom',
//                               horizontal: 'left',
//                           }}
//                           keepMounted
//                           transformOrigin={{
//                               vertical: 'top',
//                               horizontal: 'left',
//                           }}
//                           open={Boolean(anchorElNav)}
//                           onClose={handleCloseNavMenu}
//                           sx={{
//                               display: { xs: 'block', md: 'none' },
//                           }}
//                       >
//                           {pages.map((page) => (
//                               <Button
//                                   key={page.label}
//                                   component={Defpath}
//                                   to={page.path}
//                                   onClick={handleCloseNavMenu}
//                                   sx={{ my: 2, color: 'white', display: 'block' }}
//                               >
//                                   {page.label}
//                               </Button>
//                           ))}

//                       </Menu>
//                   </Box>
//                   <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                   <Typography
//                       variant="h5"
//                       noWrap
//                       component="a"
//                       href=""
//                       sx={{
//                           mr: 2,
//                           display: { xs: 'flex', md: 'none' },
//                           flexGrow: 1,
//                           fontFamily: 'poppins ',
//                           fontWeight: 700,
//                           letterSpacing: '.3rem',
//                           color: 'inherit',
//                           textDecoration: 'none',
//                       }}
//                   >
//                   </Typography>
//                   <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                       {pages.map((page) => (
//                           <Button
//                               key={page}
//                               onClick={handleCloseNavMenu}
//                               sx={{ my: 2, color: 'white', display: 'block' }}
//                           >
//                               {page}
//                           </Button>
//                       ))}
//                   </Box>
//                   KALAI VARSHAA GR<Box sx={{ flexGrow: 0 }}>
//                       <Tooltip title="Open settings">
//                           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                           </IconButton>
//                       </Tooltip>

//                       <Menu
//                           sx={{ mt: '45px' }}
//                           id="menu-appbar"
//                           anchorEl={anchorElUser}
//                           anchorOrigin={{
//                               vertical: 'top',
//                               horizontal: 'right',
//                           }}
//                           keepMounted
//                           transformOrigin={{
//                               vertical: 'top',
//                               horizontal: 'right',
//                           }}
//                           open={Boolean(anchorElUser)}
//                           onClose={handleCloseUserMenu}
//                       >
//                           {settings.map((setting) => (
//                               <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
//                                   {setting.path ? (
//                                       <Defpath to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
//                                           <Typography textAlign="center">{setting.label}</Typography>
//                                       </Defpath>
//                                   ) : (
//                                       <Typography textAlign="center">{setting.label}</Typography>
//                                   )}
//                               </MenuItem>
//                           ))}

//                       </Menu>
//                   </Box>
//                   <div>
//                       {username}{/* Display the username */}
//                   </div>
//               </Toolbar>
//           </Container>
//       </AppBar>
//       <br/><br/><Container maxWidth="sm">
//       {/* <img src={logoImage} alt="Logo" height="1000" width="500" style={{float:"left", marginRight: '10px' }} /> */}

//               <Typography variant="h5" align="center" gutterBottom>
//                   Create Job Posting
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                   <Grid container spacing={2}>
//                       <Grid item xs={12}>
//                           <TextField
//                               label="Job Title"
//                               variant="outlined"
//                               fullWidth
//                               value={jobTitle}
//                               onChange={(e) => setJobTitle(e.target.value)}
//                               required />
//                       </Grid>
//                       <Grid item xs={12}>
//                           <TextField
//                               label="Job Description"
//                               variant="outlined"
//                               multiline
//                               rows={4}
//                               fullWidth
//                               value={jobDescription}
//                               onChange={(e) => setJobDescription(e.target.value)}
//                               required />
//                       </Grid>
//                       <Grid item xs={12}>
//                           <TextField
//                               label="Job Location"
//                               variant="outlined"
//                               fullWidth
//                               value={jobLocation}
//                               onChange={(e) => setJobLocation(e.target.value)}
//                               required />
//                       </Grid>
//                       <Grid item xs={12}>
//                           <Button type="submit" variant="contained" color="primary">
//                               Post Job
//                           </Button>
//                       </Grid>
//                   </Grid>
//               </form>
//           </Container></>
//   );
// };

// export default JobPostingForm;
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector } from 'react-redux';

import { Link as Defpath } from 'react-router-dom';
import backgroundImage from "./post.avif";

const pages = ['Joblistingss' ,'Schedule', 'Chat'];
const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login as Admin', path: '/admin' }, { label: 'Login as Company', path: '/company' }, { label: 'Login as job seekers', path: '/signin' }];

const JobPostingForm = () => {
    const username = useSelector((state) => state.username);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [jobQualification, setJobQualification] = useState("");


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "700px",
        marginTop:"10px",
        // opacity: 0.5,
        // filter: "brightness(10)"
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Job Title:", jobTitle);
        console.log("Job Description:", jobDescription);
        console.log("Job Location:", jobLocation);
        console.log("Job Qualification:", jobQualification);

        // Here, you can implement the logic to submit the job posting data to the server
    };

    const postJobsButtonStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
    };

    const formContainerStyle = {
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0.5, 0.5, 0, 0.1)",
    };

    const titleStyle = {
        marginBottom: "20px",
        fontWeight: 600,
    };

    return (
        <>
            <AppBar position="static">
          <Container maxWidth="xl">
              <Toolbar disableGutters>
                  <WorkHistoryTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                  <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                          mr: 2,
                          display: { xs: 'none', md: 'flex' },
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                      }}
                  >
                      JOBHUB
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                      >
                          <MenuIcon />
                      </IconButton>
                      <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                          }}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{
                              display: { xs: 'block', md: 'none' },
                          }}
                      >
                          {pages.map((page) => (
                              <Button
                                  key={page.label}
                                  component={Defpath}
                                  to={page.path}
                                  onClick={handleCloseNavMenu}
                                  sx={{ my: 2, color: 'white', display: 'block' }}
                              >
                                  {page.label}
                              </Button>
                          ))}

                      </Menu>
                  </Box>
                  <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                  <Typography
                      variant="h5"
                      noWrap
                      component="a"
                      href=""
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'none' },
                          flexGrow: 1,
                          fontFamily: 'poppins ',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                      }}
                  >
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                      {pages.map((page) => (
                          <Button
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: 'white', display: 'block' }}
                          >
                              {page}
                          </Button>
                      ))}
                  </Box>
                  KALAI VARSHAA GR<Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                          </IconButton>
                      </Tooltip>

                      <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                      >
                          {settings.map((setting) => (
                              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                  {setting.path ? (
                                      <Defpath to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                          <Typography textAlign="center">{setting.label}</Typography>
                                      </Defpath>
                                  ) : (
                                      <Typography textAlign="center">{setting.label}</Typography>
                                  )}
                              </MenuItem>
                          ))}

                      </Menu>
                  </Box>
                  <div>
                      {username}{/* Display the username */}
                  </div>
              </Toolbar>
          </Container>
      </AppBar>
            <div style={containerStyle}>
                <Container maxWidth="sm">
                    <div style={formContainerStyle}>
                        <Typography variant="h5" align="center" gutterBottom style={titleStyle}>
                            Create Job Posting
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Job Title"
                                        variant="outlined"
                                        fullWidth
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Job Description"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={jobDescription}
                                        onChange={(e) => setJobDescription(e.target.value)}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Job Location"
                                        variant="outlined"
                                        fullWidth
                                        value={jobLocation}
                                        onChange={(e) => setJobLocation(e.target.value)}
                                        required
                                    /><br/><br/>
                                    <TextField
                                        label="Job Qualification"
                                        variant="outlined"
                                        fullWidth
                                        value={jobLocation}
                                        onChange={(e) => setJobQualification(e.target.value)}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} style={postJobsButtonStyle}>
                                <Button type="submit" variant="contained" color="primary">
                                    Post Job
                                </Button>
                            </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default JobPostingForm;
