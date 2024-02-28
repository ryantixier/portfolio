// IMPORTS

// general
import * as React from "react";
// import { useRef } from "react";

// local styles
import "../assets/App.css";
import "../assets/imageSource.css";

// local components

// NextUI components

// MUI components
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "@mui/material/Link";
// import Modal from "@mui/material/Modal";
// import MuiAlert from "@mui/material/Alert";
// import Snackbar from "@mui/material/Snackbar";

// MUI icons
// import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// import ContactForm from "./ContactForm";

// import emailjs from "@emailjs/browser";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// CONTENT

// inline styles
// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 320,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   borderRadius: "10px",
//   boxShadow: 24,
//   p: 4,
// };

// text components
const LinkedIn = "https://www.linkedin.com/in/ryan-tixier/";
const GitHub = "https://github.com/ryantixier";

export default function Footer() {
  // email js
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_z87h71g",
  //       "template_ly1qfsa",
  //       form.current,
  //       "aK6ZalbFWyQ1ymtan"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         handleOpenSnack();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // hooks
  // const [openModal, setOpenModal] = React.useState(false);
  // const [openSnack, setOpenSnack] = React.useState(false);

  // modal functionality
  // const handleCloseModal = () => setOpenModal(false);

  // snackbar functionality
  // const handleOpenSnack = () => {
  //   setOpenSnack(true);
  // };

  // const handleCloseSnack = (event, reason) => {
  //   if (reason === "clickaway") {
  //     setOpenSnack(false);
  //   }
  //   setOpenSnack(false);
  //   return;
  // };

  return (
    <>
      <Box
        sx={{
          borderTop: "40px blue",
          color: "black",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div className="background-img" />

        <BottomNavigation showLabels>
          <div className="footer-name">Ryan Tixier</div>
          <BottomNavigationAction
            component={Link}
            href={LinkedIn}
            target="_blank"
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            component={Link}
            href={GitHub}
            target="_blank"
            label="GitHub"
            icon={<GitHubIcon />}
          />
          {/* <BottomNavigationAction
            component="button"
            onClick={handleOpenModal}
            label="Contact"
            icon={<EmailIcon />}
          /> */}
        </BottomNavigation>
        {/* <Modal
          className="modal"
          open={openModal}
          onSubmit={handleCloseModal}
          onClose={handleCloseModal}
          aria-labelledby="contact-me-modal"
          aria-describedby="contact-me-modal"
        >
          <Box sx={modalStyle}>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
            </form>
          </Box>
        </Modal> */}
        {/* <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleCloseSnack}
        >
          <Alert severity="success" color="info">
            Form Submitted
          </Alert>
        </Snackbar> */}
      </Box>
    </>
  );
}
