// IMPORTS

// general
import * as React from "react";

// local styles
import "../assets/App.css";
import "../assets/imageSource.css";

// local components

// MUI components
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "@mui/material/Link";

// MUI icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// text components
const LinkedIn = "https://www.linkedin.com/in/ryan-tixier/";
const GitHub = "https://github.com/ryantixier";

export default function Footer() {
  // Hooks

  // Functions

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
        </BottomNavigation>
      </Box>
    </>
  );
}
