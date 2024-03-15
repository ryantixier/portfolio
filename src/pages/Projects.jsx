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

// local
import "../assets/App.css";

// INLINE...

// ... content
const pageHeaderContent = {
  intro: "Projects",
  subIntro: "See below for an overview of my work on the web.",
};

export const Projects = () => {
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

      <div style={{ height: "1000px" }}>
        {/* this is just to make the page scrollable */}
      </div>
    </>
  );
};

export default Projects;
