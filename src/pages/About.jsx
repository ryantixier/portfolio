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

// REMOVED IN ATTEMPT TO SIMPLIFY LAYOUT
// import IconButton from "@mui/material/IconButton";

// ... MUI icons

// REMOVED IN ATTEMPT TO SIMPLIFY LAYOUT
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// INLINE...
// INLINE...

// ... content
const pageHeaderContent = {
  intro: "Greetings, Earthling!",
  subIntro: "You've made it Ryan Tixier's online portfolio.",
};

// ... styles

// REMOVED IN ATTEMPT TO SIMPLIFY LAYOUT
// const iconButtonStyle = {
//   zIndex: 10,
//   color: "white",
//   background: "#e0e0e080",
//   "&:hover": {
//     color: "black",
//     background: "#e0e0e0",
//   },
// };

const valedictionStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "150px",
};

export const About = () => {
  //Hooks

  //Functions

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleTransitionEnd = () => {
    AOS.refresh();
    console.log("AOS.refresh");
  };

  // REMOVED IN ATTEMPT TO SIMPLIFY LAYOUT
  // const scrollToSection2 = () => {
  //   const pageContentElement = document.getElementById("section2");
  //   if (pageContentElement) {
  //     pageContentElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <PageHeader
        intro={pageHeaderContent.intro}
        subIntro={pageHeaderContent.subIntro}
      />

      {/* PAGE CONTENT BELOW */}

      <div className="section-container">
        <div className="section-title">
          <h2
            data-aos="fade-left"
            data-aos-duration="800"
            onTransitionEnd={handleTransitionEnd}
          >
            About Ryan
          </h2>
        </div>
        <div
          className="section-content hide-overflow"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aod-delay="100"
        >
          <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            Full-stack web developer and lovable nerd...
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Ryan is an ex-professional in the realms of Mental Healthcare and
            Education (~10 years).
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            Although he loved working in these fields, he recently decided to
            make a career change; he attended a Coding Bootcamp through the
            University of Denver in order to become a Web Developer.
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            These days, Ryan works as a Freelance full-stack Web Developer who
            specializes in creating front-end sites for small businesses.
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <b>
              If you are looking to build your business's online presence, Ryan
              is eager to help you get started!
            </b>
          </p>
          {/* <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            Click the "Contact" section in the navigation menu and submit the
            form to send him a message!
          </p> */}
        </div>
      </div>

      <br />
      <div id="section2" />
      <br />

      <div className="section-container hide-overflow">
        <div className="section-title">
          <h2 data-aos="fade-left" data-aos-duration="800">
            About this Portfolio
          </h2>
        </div>
        <div
          className="section-content hide-overflow"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aod-delay="100"
        >
          <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Site breakdown...
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
                <p>
                  (Current page) Provides details about Ryan as well as general
                  site information.
                </p>
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
                <p>
                  Presents Ryan's work on the web; check out the projects that
                  Ryan has worked on developing, from the start of his boot camp
                  until now.
                </p>
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
                <p>
                  Offers the option to download a PDF of Ryan's resume, and
                  records an ever-growing list of his skills and proficiencies.
                </p>
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
                <p>
                  Displays a form where you can send a message to Ryan directly;
                  he will respond within 48 hours, 7 days a week.
                </p>
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
          Explore away...
        </h1>
      </div>
    </>
  );
};

export default About;
