  import React from 'react';
  import { Container, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
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
  import CardMedia from '@mui/material/CardMedia';
  import CardActions from '@mui/material/CardActions';
  import { Link as Defpath } from 'react-router-dom';
  import { styled } from '@mui/material/styles';
  import Divider from '@mui/material/Divider';
  import Chip from '@mui/material/Chip';
  import image1 from './resume4.jpeg';
  import image2 from './resume2.avif';
  import image3 from './resume3.jpeg';
  import { useSelector } from 'react-redux';


  const pages = [
    { label: 'Job Listings', path: '/joblistings' },
    { label: 'Resume', path: '/resume' },
    { label: 'PostJobs', path: '/postingmain' },
  ];
  const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login', path: '/signin' }];

  const CreateResume = () => {
    const validationSchema = Yup.object().shape({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      // Add more validation rules for other fields
    });
    const Root = styled('div')(({ theme }) => ({
      width: '100%',
      ...theme.typography.body2,
      '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
      },
    }));
    const formik = useFormik({
      initialValues: {
        fullName: '',
        email: '',
        // Add more fields here with initial values
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        // Handle form submission
        console.log(values);
      },
    });

    const [imageIndex, setImageIndex] = React.useState(0);
  const images = [image1, image2, image3];


    React.useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

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

    const username = useSelector((state) => state.username);
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
              ></Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.label}
            component={Defpath}
            to={page.path}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.label}
          </Button>
        ))}
      </Box>
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
            </Toolbar>
          </Container>
          {username}
        </AppBar>
        <br />
        <br />
        <Card
          sx={{
            maxWidth: 1300,
            mx: 'auto',
            px: 3,
            py: 4,
            boxShadow: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia component="img" height="600" image={images[imageIndex]} alt="job" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <br />
              <b> Build Your Winning Resume </b>
              <br />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>A well-crafted resume serves as a powerful tool in presenting your professional background, helping you stand out from the competition.</b><br/><br/>
              <b>A thoughtfully built resume allows you to effectively communicate your career progression, achievements, and unique value proposition.</b>
            </Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
        <br/><br/>
        <Root>
        <Divider>
          <Chip label="BUILD YOUR RESUME" />
        </Divider>
        </Root>
        <br/><br/>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            {/* <Typography gutterBottom variant="h5" component="div">
                          <b>Create Resume</b>
              </Typography> */}
              <Card
          sx={{
              
            width: 600,
            ml:-30, 
            px: 3,
            py: 4,
            boxShadow: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
                <CardContent>
              <form onSubmit={formik.handleSubmit}>
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
                <TextField
                  label="Mobile"
                  name="mobile"
                  fullWidth
                  margin="normal"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
                <TextField
                  label="Qualification"
                  name="qualification"
                  fullWidth
                  margin="normal"
                  value={formik.values.qualification}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.qualification && Boolean(formik.errors.qualification)}
                  helperText={formik.touched.qualification && formik.errors.qualification}
                />
                <TextField
                  label="Experience"
                  name="experience"
                  fullWidth
                  margin="normal"
                  value={formik.values.experience}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.experience && Boolean(formik.errors.experience)}
                  helperText={formik.touched.experience && formik.errors.experience}
                />
                
                <TextField
                  label="Skills"
                  name="skills"
                  fullWidth
                  margin="normal"
                  value={formik.values.skills}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.skills && Boolean(formik.errors.skills)}
                  helperText={formik.touched.skills && formik.errors.skills}
                />
                <TextField
                  label="Hobby"
                  name="hobby"
                  fullWidth
                  margin="normal"
                  value={formik.values.hobby}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.hobby && Boolean(formik.errors.hobby)}
                  helperText={formik.touched.hobby && formik.errors.hobby}
                />
                <TextField
                  label="Known Languages"
                  name="lang"
                  fullWidth
                  margin="normal"
                  value={formik.values.lang}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lang && Boolean(formik.errors.lang)}
                  helperText={formik.touched.lang && formik.errors.lang}
                />
                <TextField
                  label="About"
                  name="about"
                  fullWidth
                  margin="normal"
                  value={formik.values.about}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.about && Boolean(formik.errors.about)}
                  helperText={formik.touched.about && formik.errors.about}
                /><br/>
              <center> <Button variant="contained" color="primary" type="submit">
                  Save Resume
                </Button></center>
              </form>
              </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
            
            <Card
          sx={{
            width: 600,
            mx: 'auto',
            px: 3,
            py: 4,
            boxShadow: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
                <CardContent>
                <Typography
                variant="h4"
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
                  <u> Model Resume</u>
                  </Typography><br/><br/><br/>    
                  <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >Full Name: {formik.values.fullName}</Typography><br/><br/>
                  <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ><b>Email:</b> {formik.values.email}</Typography><br/><br/>
                  <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ><b>Mobile:</b> {formik.values.mobile}</Typography><br/><br/>
                  <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ><b>Qualification: </b>{formik.values.qualification}</Typography><br/><br/>
                  <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ><b>Skills:</b> {formik.values.skills}</Typography><br/><br/>
                  <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              > Hobby:{formik.values.hobby}</Typography><br/><br/>
                  <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ><b>Known Languages: </b>{formik.values.lang}</Typography><br/><br/>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: -10,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ><b>About: </b>{formik.values.lang}</Typography><br/><br/><br/><br/><br/><br/><br/><br/>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  export default CreateResume;
