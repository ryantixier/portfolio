// IMPORTS
// IMPORTS
// IMPORTS

// general
import * as React from "react";

// MUI components
import IconButton from "@mui/material/IconButton";

// MUI icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// LOCAL...
// LOCAL...

// ...styles
import "../assets/App.css";
import "../assets/imageSource.css";

// INLINE...
// INLINE...

// ... styles
const iconButtonStyle = {
  zIndex: 10,
  color: "white",
  background: "#e0e0e080",
  "&:hover": {
    color: "black",
    background: "#e0e0e0",
  },
};

export const Header = () => {
  //Hooks

  //Functions
  const scrollToPageTitle = () => {
    const pageTitleElement = document.getElementById("pageTitle");
    if (pageTitleElement) {
      pageTitleElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-container">
      <div className="header-planet" />
      <div className="header-textbox">
        <h1>Welcome to the Portfolio of Ryan Tixier:</h1>
        <h3>
          Full-stack web developer, space nerd, and all around lovable rascal.
        </h3>
        <IconButton
          onClick={scrollToPageTitle}
          color="inherit"
          sx={iconButtonStyle}
        >
          <ArrowDownwardIcon fontSize="large" color="inherit" />
        </IconButton>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr id="pageTitle" />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Header;
