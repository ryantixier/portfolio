// IMPORTS
// IMPORTS
// IMPORTS

// general
import * as React from "react";

// MUI components
import IconButton from "@mui/material/IconButton";

// MUI icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// animations
import { motion } from "framer-motion";

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
    <>
      <div className="header-container hide-overflow">
        <motion.div
          className="header-planet"
          initial={{ opacity: 0, x: 100, y: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 2 }}
        />
        <div className="header-textbox">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 2, delay: 0.5 }}
          >
            Welcome to the Portfolio of Ryan Tixier:
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 2.5, delay: 0.75 }}
          >
            Full-stack web developer, space nerd, and all around lovable rascal.
          </motion.h3>
          <br />
          <IconButton
            onClick={scrollToPageTitle}
            color="inherit"
            sx={iconButtonStyle}
          >
            <ArrowDownwardIcon fontSize="large" color="inherit" />
          </IconButton>
          <br />
        </div>
      </div>
      <hr id="pageTitle" />
      <br />
      <br />
    </>
  );
};

export default Header;
