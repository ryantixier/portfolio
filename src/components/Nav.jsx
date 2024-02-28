// IMPORTS
import * as React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

// local components
import ContactForm from "./ContactForm";

// local styles
import "../assets/App.css";
// import "../assets/imageSource.css";

// Material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Material UI functions
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

// emailjs - contact form
import emailjs from "@emailjs/browser";

// routing information
const pages = ["About", "Portfolio", "Resume", "Contact"];
const paths = ["/", "/portfolio", "/resume"];

// styles

const theme = createTheme({
  palette: {
    primary: {
      main: "#f0f8ff", // light color - aliceblue
      contrastText: "#000000", // dark color - black
    },
    success: {
      main: "#000000", // dark color - black
      contrastText: "#f0f8ff", // light aliceblue
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: "#000000",
  borderColor: theme.palette.success.contrastText,
  "&:hover": {
    color: "#000000",
    backgroundColor: theme.palette.primary.contrastText,
    borderColor: "#000000",
  },
}));

// font declaration, used for nav links ("NavButton")
const font = "Space Grotesk";

// styling for nav links
const NavButton = styled(Button)(() => ({
  fontFamily: font,
}));

// ... modal style for small media queries
const modalStyleSm = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "#FFFFFF",
  border: "2px solid #f0f8ff",
  boxShadow: 24,
  p: 0,
  borderRadius: "5px",
};
// ... modal style for medium/large media queries
const modalStyleLg = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "#FFFFFF",
  border: "2px solid #f0f8ff",
  boxShadow: 24,
  p: 0,
  borderRadius: "5px",
};

// nav scroll action(s)
const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Nav = (props) => {
  // styling - media query
  const tabSize = useMediaQuery("(min-width:468px)", { noSsr: true });

  // email js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z87h71g",
        "template_ly1qfsa",
        form.current,
        "aK6ZalbFWyQ1ymtan"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleCloseModal();
          handleOpenSnack();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //Hooks
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const [openModal, setOpenModal] = React.useState(false);

  const [openSnack, setOpenSnack] = React.useState(false);

  const [navigation, setNavigation] = React.useState("");

  //Functions
  const scrollToPageTitle = () => {
    const pageTitleElement = document.getElementById("pageTitle");
    if (pageTitleElement) {
      pageTitleElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenSnack = () => setOpenSnack(true);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      setOpenSnack(false);
    }
    setOpenSnack(false);
    return;
  };

  const handleNavigation = (event) => {
    setNavigation(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar theme={theme}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* SM-MD DEVICE WIDTH */}
              {/* SM-MD DEVICE WIDTH */}
              {/* SM-MD DEVICE WIDTH */}
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to={paths[0]}
                onClick={scrollToPageTitle}
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 600,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <div className="nav-logo"></div>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="nav-menu"
                  aria-controls="nav-appbar"
                  onClick={handleOpenDrawer}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              {/* menu */}
              {/* menu */}
              {/* menu */}
              <Drawer
                anchor="top"
                open={openDrawer}
                onClose={handleCloseDrawer}
              >
                <Box
                  role="presentation"
                  onClick={handleCloseDrawer}
                  onKeyDown={handleCloseDrawer}
                >
                  <List value={navigation} onChange={handleNavigation}>
                    {/* ABOUT */}
                    {/* ABOUT */}
                    <ListItem
                      component={Link}
                      to={paths[0]}
                      value={pages[0]}
                      onClick={scrollToPageTitle}
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <ListItemButton
                        onClick={handleCloseDrawer}
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        {pages[0]}
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    {/* SERVICES */}
                    {/* SERVICES */}
                    <ListItem
                      component={Link}
                      to={paths[1]}
                      value={pages[1]}
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <ListItemButton
                        onClick={handleCloseDrawer}
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        {pages[1]}
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    {/* MEET THE TEAM */}
                    {/* MEET THE TEAM */}
                    <ListItem
                      component={Link}
                      to={paths[2]}
                      value={pages[2]}
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <ListItemButton
                        onClick={handleCloseDrawer}
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        {pages[2]}
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    {/* CONTACT (MODAL) */}
                    {/* CONTACT (MODAL) */}
                    <ListItem
                      component="a"
                      sx={{ color: "inherit" }}
                      onClick={handleOpenModal}
                    >
                      <ListItemButton
                        onClick={handleOpenModal}
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        {pages[3]}
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
              {/* MD+ DEVICE WIDTH */}
              {/* MD+ DEVICE WIDTH */}
              {/* MD+ DEVICE WIDTH */}
              <Typography
                className="nav-title-font"
                variant="h6"
                noWrap
                component={Link}
                to="/"
                onClick={scrollToPageTitle}
                sx={{
                  ml: -5,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: ".15rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <div className="nav-logo"></div>
              </Typography>
              {/* app-bar */}
              {/* app-bar */}
              {/* app-bar */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* ABOUT */}
                {/* ABOUT */}
                <NavButton
                  component={Link}
                  to={paths[0]}
                  value={pages[0]}
                  onClick={scrollToPageTitle}
                  color="inherit"
                >
                  {pages[0]}
                </NavButton>
                {/* SERVICES */}
                {/* SERVICES */}
                <NavButton
                  component={Link}
                  to={paths[1]}
                  value={pages[1]}
                  color="inherit"
                >
                  {pages[1]}
                </NavButton>
                {/* MEET THE TEAM */}
                {/* MEET THE TEAM */}
                <NavButton
                  component={Link}
                  to={paths[2]}
                  value={pages[2]}
                  color="inherit"
                >
                  {pages[2]}
                </NavButton>
                {/* CONTACT (MODAL) */}
                {/* CONTACT (MODAL) */}
                <NavButton
                  component="a"
                  onClick={handleOpenModal}
                  color="inherit"
                >
                  {pages[3]}
                </NavButton>
              </Box>
              <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="contact-modal"
                aria-describedby="contact-modal-description"
              >
                <Fade in={openModal}>
                  {!tabSize ? (
                    <Box sx={modalStyleSm}>
                      <form
                        className="contact-form"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <ContactForm />
                        <ColorButton
                          onClick={handleCloseModal}
                          variant="contained"
                          size="large"
                          fullWidth
                        >
                          Close
                        </ColorButton>
                      </form>
                    </Box>
                  ) : (
                    <Box sx={modalStyleLg}>
                      <form
                        className="contact-form"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <ContactForm />
                        <ColorButton
                          onClick={handleCloseModal}
                          variant="contained"
                          size="large"
                          fullWidth
                        >
                          Close
                        </ColorButton>
                      </form>
                    </Box>
                  )}
                </Fade>
              </Modal>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
      >
        <Alert severity="success" color="info">
          Form Submitted
        </Alert>
      </Snackbar>
      <Toolbar />
    </>
  );
};

export default Nav;
