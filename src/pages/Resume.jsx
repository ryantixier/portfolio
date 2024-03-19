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
  backgroundColor: "#35557140",
  marginTop: "-3px",
  width: "300px",
  border: "#6094c140 2px solid",
  boxShadow: "0px 0px 10px 2px #6094c140",
  textShadow: "1px 2px #000000",
  "&:hover": {
    backgroundColor: "#35557180",
    boxShadow: "0px 0px 20px 2px #6094c180",
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
        <div className="resume-section2" data-aos="fade-left">
          <h2 data-aos="fade-left" data-aos-duration="700">
            Skills and Proficiencies
          </h2>
          <h3 data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
            Ryan is a full-stack web developer who specializes in front-end
            development. He takes pride in working with small businesses to grow
            their online presence.
          </h3>
          <p data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
            <i>
              For examples of Ryan's work, please visit the "Projects" page.
            </i>
          </p>
          <br />
          <code
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <b>For Devs -</b> below are Ryan's proficiencies:
          </code>
          <br />
          <code
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <b>
              <i>let</i> webDevelopmentSkills
            </b>
            = &#123;
          </code>
          <code
            style={indentCode}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <i>languages</i>: &#123; {contentStrings.languages} &#125;,
          </code>
          <code
            style={indentCode}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <i>frontEnd</i>: &#123; {contentStrings.frontEnd} &#125;,
          </code>
          <code
            style={indentCode}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <i>backEnd</i>: &#123; {contentStrings.backEnd} &#125;,
          </code>
          <code
            style={indentCode}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <i>component</i>: &#91; {contentStrings.componentLibraries} &#93;,
          </code>
          <code
            style={indentCode}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <i>other</i>: &#91; {contentStrings.other} &#93;,
          </code>
          <code
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            &#125;
          </code>
        </div>
        <div className="resume-section1">
          <h3
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Ryan Tixier's Resume:
          </h3>
          <div
            className="resume-img"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          />
          <IconButton
            href={resumeCopy}
            download="RT-Resume"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
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
