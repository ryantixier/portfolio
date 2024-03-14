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
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// INLINE...
// INLINE...

// ... content
const pageHeaderContent = {
  intro: "Greetings, Earthling!",
  subIntro: "You've made it Ryan Tixier's online portfolio.",
};

// ... styles
const iconButtonStyle = {
  zIndex: 10,
  color: "white",
  background: "#e0e0e080",
  "&:hover": {
    color: "black",
    background: "#e0e0e0",
  },
};

const valedictionStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "150px",
};

export const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  //Hooks

  //Functions
  const scrollToSection2 = () => {
    const pageContentElement = document.getElementById("section2");
    if (pageContentElement) {
      pageContentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHeader
        intro={pageHeaderContent.intro}
        subIntro={pageHeaderContent.subIntro}
      />

      {/* PAGE CONTENT BELOW */}

      <div className="section-container">
        <div className="section-title">
          <h2 data-aos="fade-up" data-aos-duration="800">
            About Ryan
          </h2>
          <div
            className="increase-z"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <IconButton
              onClick={scrollToSection2}
              color="inherit"
              sx={iconButtonStyle}
            >
              <ArrowDownwardIcon fontSize="large" color="inherit" />
            </IconButton>
          </div>
        </div>
        <div
          className="section-content hide-overflow"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aod-delay="100"
        >
          <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Full-stack developer and lovable nerd...
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            Ryan is a Full-stack web developer who specializes in creating
            front-end sites for small businesses.
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            If you are looking to build your business's online presence, Ryan is
            eager to help you get started!
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            Click the "Contact" section in the navigation menu and submit the
            form to send him a message!
          </p>
        </div>
      </div>

      <br />
      <div id="section2" />
      <br />

      <div className="section-container">
        <div className="section-title">
          <h2 data-aos="fade-up" data-aos-duration="800">
            About the Portfolio
          </h2>
        </div>
        <div
          className="section-content hide-overflow"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aod-delay="100"
        >
          <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            How the site is broken down...
          </h3>
          <ul>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h3>
                <i>About</i>
              </h3>
              <div>
                The current page! Find out a little more about Ryan and more
                about general site information here.
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <h3>
                <i>Projects</i>
              </h3>
              <div>
                Presents Ryan's work on the web; check out the projects that
                Ryan has worked on developing, from the start of his bootcamp
                until now.
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <h3>
                <i>Resume</i>
              </h3>
              <div>
                Offers the option to download a PDF of Ryan's resume, and
                displays an ever-growing list of his skills and proficiencies.
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <h3>
                <i>Contact</i>
              </h3>
              <div>
                Displays a form where you can get send a message to Ryan
                directly.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div style={valedictionStyle}>
        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          Explore Away...
        </h1>
      </div>
    </>
  );
};

export default About;
