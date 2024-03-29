// IMPORTS
import * as React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

// local components
import ContactForm from "./ContactForm";

// local styles
import "../assets/App.css";
import "../assets/imageSource.css";

// Material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
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
import Zoom from "@mui/material/Zoom";

// emailjs - contact form
import emailjs from "@emailjs/browser";

// routing information
const pages = ["About", "Projects", "Resume/Skills", "Contact"];
const paths = ["/", "/projects", "/resume"];

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

const ColorButton = styled(Button)(() => ({
  color: "#f0f8ff",
  backgroundColor: "#000000",
  borderColor: "#f0f8ff",
  "&:hover": {
    color: "#000000",
    backgroundColor: "#f0f8ff",
    borderColor: "#000000",
  },
}));

// font declaration, used for nav links ("NavButton")
// const font = "Space Grotesk";

const addGradient = {
  background: "linear-gradient(0deg, #939d9e 10%,white 100%)",
  borderBottom: "2px outset #000000",
};

// styling for nav container
const allTheWidth = { minWidth: "100vw" };

// styling for nav links
const NavButton = styled(Button)(() => ({
  // fontFamily: font,
  color: "#000000",
  width: "100%",
  borderLeft: "1px solid #00000060",
  borderRadius: 0,
  "&:hover": {
    color: "#355571",
    backgroundColor: "#00000040",
    fontWeight: "bold",
    textShadow: "0px 0px 1px #ffffff80",
  },
}));

// ... modal style for small media queries
const modalStyleSm = {
  width: "90%",
  position: "absolute",
  top: "calc(50% - 45%)", // 45% = 90% / 2
  left: "calc(50% - 45%)", // 45% = 90% / 2
  bgcolor: "#FFFFFF",
  border: "2px solid #f0f8ff",
  boxShadow: 24,
  p: 0,
  borderRadius: "5px",
};
// ... modal style for medium/large media queries
const modalStyleLg = {
  width: 450,
  position: "absolute ",
  top: "calc(50% - 225px)", // 225px = 450px / 2
  left: "calc(50% - 225px)", // 225px = 450px / 2
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
      // setTimeout(() => {
      pageTitleElement.scrollIntoView({ behavior: "instant" });
      // }, 100);
      //setTImeout function is used to allow the page to render the pageTitle element before scrolling to it; troubleshoots issue where the page would not scroll to the pageTitle element fully
    }
  };

  const scrollToHeader = () => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth", block: "start" });
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
  };

  const handleNavigation = (event) => {
    setNavigation(event.target.value);
  };

  return (
    <>
      <div id="header" />
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar theme={theme}>
          <Container maxWidth="xl" sx={[addGradient, allTheWidth]}>
            <Toolbar disableGutters>
              {/* SM-MD DEVICE WIDTH */}
              {/* SM-MD DEVICE WIDTH */}
              {/* SM-MD DEVICE WIDTH */}
              <Typography
                variant="h6"
                noWrap
                // component={Link}
                // to={paths[0]}
                onClick={scrollToHeader}
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
                  sx={addGradient}
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
                      onClick={scrollToPageTitle}
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
                      onClick={scrollToPageTitle}
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
                onClick={scrollToHeader}
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
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-around",
                }}
              >
                {/* ABOUT */}
                {/* ABOUT */}
                <NavButton
                  component={Link}
                  to={paths[0]}
                  value={pages[0]}
                  onClick={scrollToPageTitle}
                  // color="inherit"
                >
                  {pages[0]}
                </NavButton>
                {/* SERVICES */}
                {/* SERVICES */}
                <NavButton
                  component={Link}
                  to={paths[1]}
                  value={pages[1]}
                  onClick={scrollToPageTitle}
                  // color="inherit"
                >
                  {pages[1]}
                </NavButton>
                {/* MEET THE TEAM */}
                {/* MEET THE TEAM */}
                <NavButton
                  component={Link}
                  to={paths[2]}
                  value={pages[2]}
                  onClick={scrollToPageTitle}
                  // color="inherit"
                >
                  {pages[2]}
                </NavButton>
                {/* CONTACT (MODAL) */}
                {/* CONTACT (MODAL) */}
                <NavButton
                  component="a"
                  onClick={handleOpenModal}
                  color="inherit"
                  sx={(NavButton, { borderRight: "1px solid #00000060" })}
                  // maintains NavButton styling while adding border-right
                >
                  {pages[3]}
                </NavButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="contact-modal"
        aria-describedby="contact-modal-description"
      >
        <Zoom in={openModal}>
          {!tabSize ? (
            <Box sx={modalStyleSm}>
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
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
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
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
        </Zoom>
      </Modal>
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
