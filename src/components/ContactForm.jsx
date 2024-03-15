// IMPORTS

// general
import * as React from "react";

// local styles
import "../assets/App.css";

// MUI components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// MUI functions
import { styled } from "@mui/material/styles";

// styled components
const ColorButton = styled(Button)(() => ({
  color: "#f0f8ff",
  backgroundColor: "#000000",
  borderColor: "#f0f8ff",
  "&:hover": {
    color: "#000000",
    backgroundColor: "#f0f8ff",
    borderColor: "#000000",
  },
  marginTop: "10px",
  marginBottom: "1%",
}));

export const ContactForm = () => {
  // Hooks

  // Functions

  return (
    <>
      <h3>Contact</h3>
      <p>
        For a quote on developing a website for your business or any other
        inquiries, please fill out the form below - Ryan will reply via email
        within 48 hours.
      </p>
      <div>
        <TextField
          name="name"
          required
          label="Full Name"
          variant="standard"
          fullWidth
        />
      </div>
      <div>
        <TextField
          required
          name="email"
          type="email"
          label="Email"
          variant="standard"
          fullWidth
        />
      </div>
      <div>
        <TextField
          required
          name="message"
          label="Message"
          variant="standard"
          multiline
          minRows={4}
          maxRows={7}
          fullWidth
        />
      </div>
      <ColorButton type="submit" variant="contained" size="large" fullWidth>
        Submit Form
      </ColorButton>
    </>
  );
};

export default ContactForm;
