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
import image from './aiinfo.avif';



const pages = ['Joblistingss' ,'Schedule', 'Chat'];
const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login as Admin', path: '/admin' },{ label: 'Login as Company', path: '/company' },{ label: 'Login as job seekers', path: '/signin' }];

const JobInfoPageai = () => {
    
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
                  </Box>KALAI VARSHAA GR
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
                  AI & DS Developer
                      </Typography>
                  <Grid container spacing={2}>
                      <Grid item xs={6}>
                          <Typography variant="body1" gutterBottom>
                              <b>Company:</b> Acubetech Solutions
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
                          Job DescriptionJDExperience should be 8 – 12 yearsWork location: CoimbatoreExperience on DB design, Development, Debugging and migration for large set of dataRich Experience in any ETL tools, Develops logical and physical data flow models for ETL applications.Proficient in Oracle PL/SQL or MS SQL. Writing complex SQL queries and PL SQL proceduresKnowledge on OOAD, XML, XML Parsing and DB testing.Experience with DB performance tuningShould have good logical data modelling skills and implementation experience in physical database structure which involves operational data storage and data marts.Exposure with Hadoop v2, MapReduce, HDFSGood understanding of configuration management with hands-on experience on Continuous integrationKnowledge in C# development will be an added advantageAbility to analyze a company’s big-picture data needs.                          </Typography>
                      </Grid>
                  </Grid>
              </Paper>
          </Container></>
  );
};

export default JobInfoPageai;
