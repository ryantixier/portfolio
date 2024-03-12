// IMPORTS

// general
import * as React from "react";
import { useEffect } from "react";

// animations
import AOS from "aos";
import "aos/dist/aos.css";

// MUI components
import IconButton from "@mui/material/IconButton";

// MUI icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// local

// ... styles
import "../assets/App.css";
import "../assets/imageSource.css";

// INLINE...
// INLINE...

// ... styles
const iconButtonStyle = {
  zIndex: 11,
  color: "white",
  background: "#e0e0e080",
  "&:hover": {
    color: "black",
    background: "#e0e0e0",
  },
};

export const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  //Hooks

  //Functions
  const scrollToPageContent = () => {
    const pageContentElement = document.getElementById("pageContent");
    if (pageContentElement) {
      pageContentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div className="page-intro">
          <h1 data-aos="fade-right" data-aos-duration="700">
            Greetings, Earthling!
          </h1>
          <h4 data-aos="fade-left" data-aos-duration="1200">
            You've made it Ryan Tixier's online portfolio.
          </h4>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
            <IconButton
              onClick={scrollToPageContent}
              color="inherit"
              sx={iconButtonStyle}
            >
              <ArrowDownwardIcon fontSize="large" color="inherit" />
            </IconButton>
          </div>
        </div>
        <div id="pageContent"></div>
      </div>
    </>
  );
};

export default About;
