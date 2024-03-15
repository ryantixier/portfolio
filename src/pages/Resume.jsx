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
import resume from "../assets/RT_resume-portfolio.pdf";

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
  subIntro:
    "See below for my downloadable resume and a list of my proficiencies.",
};

// ... styles
const chipStyle = {
  color: "white",
  backgroundColor: "#f0ffff40",
  marginTop: "-3px",
  width: "300px",
};

const iconButtonStyle = { width: "100%", justifyContent: "center" };

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

      <div className="resume-container">
        <div className="resume-section1">
          <div
            className="resume-img"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          />
          <IconButton
            href={resume}
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
        <div
          className="resume-section2 hide-overflow"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <h2
            className="hide-overflow"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Skills and Proficiencies
          </h2>
          <h3
            className="hide-overflow"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="130"
          >
            Ryan is a full-stack developer, though he specializes in front-end
            development. He works primarily within the React.js library and has
            worked with small businesses to grow their online presence.
          </h3>
          <p
            className="hide-overflow"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="175"
          >
            <b>
              <i>
                For more information and examples about Ryan's work, please
                visit the "Projects" page.
              </i>
            </b>
          </p>
          <br />
          <code
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <b>For Devs - below are my proficiencies:</b>
          </code>
          <br />
          <code
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <b>
              <i>let</i> webDevelopmentSkills
            </b>{" "}
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
            <i>components</i>: &#91; {contentStrings.componentLibraries} &#93;,
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
      </div>
    </>
  );
};

export default Resume;
