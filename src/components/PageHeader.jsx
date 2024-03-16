// IMPORTS

// GENERAL
// GENERAL

import * as React from "react";
import { useEffect } from "react";

// LOCAL ...
// LOCAL ...

// ... styles
import "../assets/App.css";
import "../assets/imageSource.css";

// ... components

// EXTERNAL ...
// EXTERNAL ...

// ... animations
import AOS from "aos";
import "aos/dist/aos.css";

// ... MUI components
import IconButton from "@mui/material/IconButton";

// ... MUI icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// INLINE...
// INLINE...

// ... content

// ... styles
const iconButtonStyle = {
  color: "white",
  background: "#e0e0e080",
  "&:hover": {
    color: "black",
    background: "#e0e0e0",
  },
};

export const PageHeader = (props) => {
  //Hooks
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  //Functions
  const scrollToPageContent = () => {
    const pageContentElement = document.getElementById("pageContent");
    if (pageContentElement) {
      pageContentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="page-intro hide-overflow">
        <h1
          className="hide-overflow"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          {props.intro}
        </h1>
        <h4
          className="hide-overflow"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {props.subIntro}
        </h4>
        <br />
        <div
          className="increase-z hide-overflow"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <IconButton
            onClick={scrollToPageContent}
            color="inherit"
            sx={iconButtonStyle}
          >
            <ArrowDownwardIcon fontSize="large" color="inherit" />
          </IconButton>
        </div>
      </div>
      <br />
      <br />
      <div id="pageContent"></div>
    </>
  );
};

export default PageHeader;
