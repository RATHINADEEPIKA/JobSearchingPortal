import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link as Defpath } from "react-router-dom";
import image from "./job.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectUser } from "./userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Landingpage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/signin");
    }
    return () => {};
  }, []);

  const pages = [
    { label: "Job Listings", path: "/joblistings" },
    { label: "Resume", path: "/resume" },
    { label: "Feedback", path: "/feedbackpage" },
  ];
  const settings = [
    //   "Profile",
    //   { label: "Login as Admin", path: "/admin" },
    //   { label: "Login as Company", path: "/company" },
    //   { label: "Login as job seekers", path: "/signin" },
    { label: user.email, path: "" },
    {
      label: "logout",
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
    // console.log("wooruingnisd");
  };
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
    <>
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <WorkHistoryTwoToneIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                JOBHUB
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page.label}
                        component={Defpath}
                        to={page.path}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page.label}
                      </Button>
                    ))}
                  </Box>
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "poppins ",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    component={Defpath}
                    to={page.path}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                      {setting.path ? (
                        <Defpath
                          to={setting.path}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <Typography textAlign="center">
                            {setting.label}
                          </Typography>
                        </Defpath>
                      ) : (
                        <Typography textAlign="center" onClick={handleLogout}>
                          {setting.label}
                        </Typography>
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <div>{/* {"kishore"} */}</div>
            </Toolbar>
          </Container>
        </AppBar>
        <br /> <br />
        <Card
          sx={{
            maxWidth: 1300,
            mx: "auto",
            px: 3,
            py: 4,
            boxShadow: 8,
          }}
        >
          <CardMedia component="img" height="600" image={image} alt="job" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <br />
              <b>
                {" "}
                Unlock Your Career Potential
                <br />
              </b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>
                Connect with top employers and find your ideal job through our
                job search platform!
              </b>
            </Typography>
          </CardContent>
          <CardActions>
            <Defpath to="/joblistings">
              {" "}
              <Button size="large" color="primary">
                <b>Get Started</b>
              </Button>
            </Defpath>
          </CardActions>
        </Card>
      </>
    </>
  );
}
export default Landingpage;
