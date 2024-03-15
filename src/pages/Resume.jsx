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
import PageHeader from "../components/PageHeader";

// EXTERNAL ...
// EXTERNAL ...

// ... animations
import AOS from "aos";
import "aos/dist/aos.css";

// ... MUI components
// import IconButton from "@mui/material/IconButton";

// ... MUI icons
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// INLINE...
// INLINE...

// ... content
const pageHeaderContent = {
  intro: "Resume & Skills",
  subIntro:
    "See below for my downloadable resume and a list of my proficiencies.",
};

export const Resume = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  //Hooks

  //Functions

  return (
    <>
      <PageHeader
        intro={pageHeaderContent.intro}
        subIntro={pageHeaderContent.subIntro}
      />

      {/* PAGE CONTENT BELOW */}

      <div className="resume-container"></div>
    </>
  );
};

export default Resume;
