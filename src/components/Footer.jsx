// IMPORTS

// general
import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// ANIMATIONS
// framer imports
import { motion } from "framer-motion";

// local styles
import "../assets/App.css";
import "../assets/imageSource.css";

// local components

// MUI components
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

// MUI icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// text components
const LinkedIn = "https://www.linkedin.com/in/ryan-tixier/";
const GitHub = "https://github.com/ryantixier";

// inline styles
const backgroundImgStyle = {
  position: "sticky",
  bottom: 10,
  left: 0,
  overflow: "hidden",
};

const bottNavStyle = {
  height: "85px",
  borderTop: "2px inset #000000",
  background: "linear-gradient(180deg, #939d9e 0%,  #ffffff 100%)",
};

const footerBoxStyle = {
  color: "black",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
};

const iconStyle = {
  maxWidth: "5%",
  borderLeft: "2px solid #e0e0e0",
  borderRight: "2px solid #e0e0e0",
  borderRadius: "50%",
  marginRight: "4%",
  marginLeft: "4%",
  marginTop: "1%",
  marginBottom: "1%",

  "&:hover": {
    fontWeight: "bolder",
    background: "#35557140",
    transition: "0.3s",
  },
};

export const Footer = () => {
  // Hooks
  const [yPosition, setYPosition] = useState("0%");
  const [xPosition, setXPosition] = useState("0px");

  const location = useLocation();

  let displayText = "";

  // Functions
  useEffect(() => {
    // adjusts the position of the background image based on the user's scroll position
    const handleScroll = () => {
      const position = window.scrollY;

      // Trigger animation when the user scrolls down
      if (position > 100) {
        setYPosition("41%");
        setXPosition("-47px");
      } else {
        setYPosition("0%");
        setXPosition("0px");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  switch (location.pathname) {
    case "/":
      displayText = "About";
      break;
    case "/projects":
      displayText = "Projects";
      break;
    case "/resume":
      displayText = "Resume";
      break;
    default:
      displayText = "";
      break;
  }

  return (
    <>
      <Box sx={backgroundImgStyle}>
        <motion.div
          className="background-img"
          animate={{ x: xPosition, y: yPosition }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        >
          <span>{displayText}</span>
        </motion.div>
      </Box>
      <Box sx={footerBoxStyle}>
        <BottomNavigation sx={bottNavStyle}>
          <div className="footer-name">
            <Divider>Ryan Tixier</Divider>
          </div>
          <BottomNavigationAction
            component={Link}
            href={LinkedIn}
            target="_blank"
            label="LinkedIn"
            showLabel
            icon={<LinkedInIcon />}
            sx={iconStyle}
          />
          <BottomNavigationAction
            component={Link}
            href={GitHub}
            target="_blank"
            label="GitHub"
            showLabel
            icon={<GitHubIcon />}
            sx={iconStyle}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};
export default Footer;
