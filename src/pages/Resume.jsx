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
// const contentStrings = {
//   languages: "JavaScript, HTML, CSS",
//   frontEnd: "ReactJS, Angular",
//   backEnd: "NodeJS, Bun, ExpressJS, mySQL, MongoDB",
//   componentLibraries:
//     "< MaterialUI />, < BootStrap />, < AntDesign />, < FramerMotion />",
//   other: "“Agile Software Development”, “Git”, “Heroku”, “GitHub Pages”",
// };

const contentStrings = {
  languages: ["JavaScript", "HTML", "CSS"],
  frontEnd: ["ReactJS", "Angular"],
  backEnd: ["NodeJS", "Bun", "ExpressJS", "mySQL", "MongoDB"],
  componentLibraries: ["MaterialUI", "BootStrap", "AntDesign", "FramerMotion"],
  other: ["Agile Software Development", "Git", "Heroku", "GitHub Pages"],
};

const pageHeaderContent = {
  intro: "Resume & Skills",
  subIntro: "Ryan's dev skills & resume download.",
};

// ... styles
const chipStyle = {
  color: "white",
  background: "linear-gradient(0deg, #00000039 0%, #5d90c360 100%)",
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

export const Resume = () => {
  //Hooks

  //Functions

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleTransitionEnd = () => {
    AOS.refresh();
    console.log("AOS.refresh");
  };

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
          data-aos-duration="800"
          onTransitionEnd={handleTransitionEnd}
        >
          <h2>Resume Preview</h2>
          <h3>
            Ryan is a full-stack web developer who specializes in front-end
            development. He takes pride in working with small businesses to grow
            their online presence.
          </h3>

          <hr />

          <div
            className="resume-section1"
            data-aos="fade-left"
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

          {/* <div className="code-block">
            <span>
              <b>For Devs -</b> below are Ryan's proficiencies:
            </span>
            <br />
            <br />
            <span>
              <b>
                <i>let</i> webDevelopmentSkills
              </b>
              <span> = &#123;</span>
            </span>
            <br />
            <span>
              <i style={indent1}>languages</i>: &#123;
              <ul>
                {contentStrings.languages.map((language, index) => (
                  <li key={index}> {language},</li>
                ))}
              </ul>
              <div style={indent1}>&#125;,</div>
            </span>
            <span>
              <i style={indent1}>frontEnd</i>: &#123;
              <ul>
                {contentStrings.frontEnd.map((frontEnd, index) => (
                  <li key={index}> {frontEnd},</li>
                ))}
              </ul>
              <div style={indent1}>&#125;,</div>
            </span>
            <span>
              <i style={indent1}>backEnd</i>: &#123;
              <ul>
                {contentStrings.backEnd.map((backEnd, index) => (
                  <li key={index}>{backEnd},</li>
                ))}
              </ul>
              <div style={indent1}>&#125;,</div>
            </span>
            <span>
              <i style={indent1}>component</i>: &#91;
              {contentStrings.componentLibraries.map(
                (componentLibraries, index) => (
                  <ul>
                    <li key={index}> {componentLibraries},</li>
                  </ul>
                )
              )}
              <div style={indent1}>&#93;,</div>
            </span>
            <span>
              <i style={indent1}>other</i>: &#91;{" "}
              {contentStrings.other.map((other, index) => (
                <ul>
                  <li key={index}> {other},</li>
                </ul>
              ))}
              <div style={indent1}>&#93;,</div>
            </span>
            <span>
              <br />
              &#125;
            </span>
          </div> */}
        </div>
        <div
          className="code-block"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2>
            <b>Proficiencies</b>
          </h2>
          <br />
          <aside>
            <span className="code-indent1">
              <b>
                <i>let</i> ryanWebDevSkills
              </b>
              <span> = &#123;</span>
            </span>
            <br />
            <span>
              <i className="code-indent2">languages</i>: &#123;
              <ul>
                {contentStrings.languages.map((language, index) => (
                  <li className="code-indent3" key={index}>
                    {" "}
                    {language},
                  </li>
                ))}
              </ul>
              <div className="code-indent2">&#125;,</div>
            </span>
            <span>
              <i className="code-indent2">frontEnd</i>: &#123;
              <ul>
                {contentStrings.frontEnd.map((frontEnd, index) => (
                  <li className="code-indent3" key={index}>
                    {frontEnd},
                  </li>
                ))}
              </ul>
              <div className="code-indent2">&#125;,</div>
            </span>
            <span>
              <i className="code-indent2">backEnd</i>: &#123;
              <ul>
                {contentStrings.backEnd.map((backEnd, index) => (
                  <li className="code-indent3" key={index}>
                    {backEnd},
                  </li>
                ))}
              </ul>
              <div className="code-indent2">&#125;,</div>
            </span>
            <span>
              <i className="code-indent2">component</i>: &#91;
              {contentStrings.componentLibraries.map(
                (componentLibraries, index) => (
                  <ul>
                    <li className="code-indent3" key={index}>
                      {`< ${componentLibraries} />`},
                    </li>
                  </ul>
                )
              )}
              <div className="code-indent2">&#93;,</div>
            </span>
            <span>
              <i className="code-indent2">other</i>: &#91;
              {contentStrings.other.map((other, index) => (
                <ul>
                  <li className="code-indent3" key={index}>
                    "{other}",
                  </li>
                </ul>
              ))}
              <div className="code-indent2">&#93;,</div>
            </span>
            <span>
              <br />
              <div className="code-indent1">&#125;,</div>
            </span>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Resume;
