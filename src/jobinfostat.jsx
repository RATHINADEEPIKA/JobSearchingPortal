// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector } from 'react-redux';
import {Link as Defpath} from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import image from './analyst.avif';



const pages = ['Joblistingss' ,'Schedule', 'Chat'];
const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login as Admin', path: '/admin' },{ label: 'Login as Company', path: '/company' },{ label: 'Login as job seekers', path: '/signin' }];

const JobInfoPage = () => {
    
    const username = useSelector((state) => state.username);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  return (
    <><AppBar position="static">
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
                  KALAI VARSHAA GR
                 <Box sx={{ flexGrow: 0 }}>
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
      </AppBar><br /><br /><Container maxWidth="md">
      <CardMedia
    component="img"
    height="400"
    image={image} // Replace this with the path to your image or a URL
    alt="Job Image"
    sx={{ marginBottom: 2 }}
  />
              <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
                  <Typography variant="h4" gutterBottom>
                      DATA ANALYST
                  </Typography>
                  <Grid container spacing={2}>
                      <Grid item xs={6}>
                          <Typography variant="body1" gutterBottom>
                              <b>Company:</b> Moving Walls India
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                              <b>Location:</b> Chennai, India
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                             <b> Posted Date:</b> July 24, 2023
                          </Typography>
                      </Grid>
                      <Grid item xs={6}>
                          <Typography variant="body1" gutterBottom>
                              <b>Job Type:</b> Full-time
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                              <b>Salary:</b> $80,000 - $100,000
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                              <b>Job ID:</b> 12345
                          </Typography>
                      </Grid>
                      <Grid item xs={12}>
                          <Typography variant="h5" gutterBottom>
                              Job Description
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                          We Move Walls To Measure, Reach, and Influence Real People in Physical Spaces The digital disruption of out-of-home advertising has presented us with an opportunity for innovation and leadership. We use data and technology to design media solutions that empower our clients to measure, reach and influence consumers in the real world. In simple terms, we have created the industry platform for Outernet. Our proficiency in these fields has lead to us being recognised with more than 25 global and regional awards for media innovation, technology, and business leadership. If you think that you can lead the team to greater achievements, this is the right role for you.
                          </Typography>
                      </Grid>
                  </Grid>
              </Paper>
          </Container></>
  );
};

export default JobInfoPage;
