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

// ... files
import resumeCopy from "../assets/RT_resume-portfolio.pdf";

// EXTERNAL ...
// EXTERNAL ...

// ... animations
import AOS from "aos";
import "aos/dist/aos.css";

// ... MUI components
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";

// ... MUI icons
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// INLINE...
// INLINE...

// ... content
const contentStrings = {
  languages: "JavaScript, HTML, CSS",
  frontEnd: "ReactJS, Angular",
  backEnd: "NodeJS, Bun, ExpressJS, mySQL, MongoDB",
  componentLibraries:
    "< MaterialUI />, < BootStrap />, < AntDesign />, < FramerMotion />",
  other: "“Agile Software Development”, “Git”, “Heroku”, “GitHub Pages”",
};

const pageHeaderContent = {
  intro: "Resume & Skills",
  subIntro: "Ryan's dev skills & resume download.",
};

// ... styles
const chipStyle = {
  color: "white",
  backgroundColor: "#35557120",
  padding: "20px",
  minWidth: "300px",
  border: "#6094c140 2px solid",
  boxShadow: "0px 0px 10px 0px #6094c140",
  "&:hover": {
    backgroundColor: "#35557140",
    boxShadow: "0px 0px 10px 0px #6094c180",
  },
};

const iconButtonStyle = {
  width: "100%",
  justifyContent: "center",
  position: "relative",
  zIndex: 10,
};

const indentCode = {
  paddingLeft: "20px",
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

      <div className="resume-container hide-overflow">
        <div
          className="resume-section2"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <h2>Skills and Proficiencies</h2>
          <h3>
            Ryan is a full-stack web developer who specializes in front-end
            development. He takes pride in working with small businesses to grow
            their online presence.
          </h3>
          <p>
            <i>
              For examples of Ryan's work, please visit the "Projects" page.
            </i>
          </p>
          <br />
          <code>
            <b>For Devs -</b> below are Ryan's proficiencies:
          </code>
          <br />
          <code>
            <b>
              <i>let</i> webDevelopmentSkills
            </b>
            = &#123;
          </code>
          <code style={indentCode}>
            <i>languages</i>: &#123; {contentStrings.languages} &#125;,
          </code>
          <code style={indentCode}>
            <i>frontEnd</i>: &#123; {contentStrings.frontEnd} &#125;,
          </code>
          <code style={indentCode}>
            <i>backEnd</i>: &#123; {contentStrings.backEnd} &#125;,
          </code>
          <code style={indentCode}>
            <i>component</i>: &#91; {contentStrings.componentLibraries} &#93;,
          </code>
          <code style={indentCode}>
            <i>other</i>: &#91; {contentStrings.other} &#93;,
          </code>
          <code>&#125;</code>
        </div>
        <div
          className="resume-section1"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h3>Ryan Tixier's Resume:</h3>
          <div className="resume-img" />
          <IconButton
            href={resumeCopy}
            download="RT-Resume"
            sx={iconButtonStyle}
          >
            <Chip
              icon={<FileDownloadIcon color="white" />}
              label="Download Resume"
              sx={chipStyle}
            />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Resume;
