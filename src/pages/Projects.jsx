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
import BootcampAside from "../components/BootcampAside";
import FreelanceAside from "../components/FreelanceAside";

// ... images
import pscScreenshot from "../assets/images/website-previews/pscScreenshot.png";
import tajScreenshot from "../assets/images/website-previews/tajScreenshot.png";

// EXTERNAL ...
// EXTERNAL ...

// ... animations
import AOS from "aos";
import "aos/dist/aos.css";

// ... MUI components
import Divider from "@mui/material/Divider";

// INLINE...

// ... page content
const pageHeaderContent = {
  intro: "Projects",
  subIntro: "Ryan's work on the web.",
};

// ... props content
// ... props content

// ... freelance

const tajInfo = {
  name: "The TAJ Salon",
  websiteUrl: "https://thetajsalon.com",
  websiteTitle: "thetajsalon.com",
  image: tajScreenshot,
  alt: "The TAJ Salon Website",
  description: `The TAJ Salon is a business based out of Lady Lake, Florida. The business owner solicited Ryan's services for the creation of the salon's website. He developed the a first draft of the site within two weeks, and published the site after one month. Click the link with the URL above to view.`,
  codeLanguages: "JavaScript, HTML, CSS",
  codeEnvironments: "Node.js",
  codeLibraries: "React.js",
  codeComponents: "Material UI, Bootstrap, Animate-On-Scroll ('AOS')",
  codeWrite: "VS Code",
  codeHost: "GitHub Pages",
};

const pscInfo = {
  name: "Playground Safety Consultants",
  websiteTitle: "(Link N/A: Coming Soon)",
  websiteUrl: "",
  image: pscScreenshot,
  alt: "Playground Safety Consultants Website",
  description:
    "Playground Safety Consultants is a business that seeks to ensure compliance with playground safety standards across the US. The business owner approached Ryan to develop a website for the business. The site is currently under development, and is expected to be published in April 2024; link to come.",
  codeLanguages: "JavaScript, HTML, CSS",
  codeEnvironments: "Node.js",
  codeLibraries: "React.js",
  codeComponents: "Material UI, Framer-Motion, Animate-On-Scroll ('AOS')",
  codeWrite: "VS Code",
  codeHost: "GitHub Pages",
};

// ... bootcamp projects
// const workoutWizard = {
//   name: "Workout Wizard",
//   image: "",
//   intro: "Full-stack application for tracking workouts",
//   ghRepo: "",
//   url: "",
// };

// const codeGauntlet = {
//   name: "Code Gauntlet",
//   image: "",
//   intro: "Full-stack application for coding challenges",
//   ghRepo: "",
//   url: "",
// };

// ... bootcamp front-end

const frontEnd1 = {
  module: "Module 3 Challenge",
  ghRepo: "https://github.com/ryantixier/M3C-password-generator",
  ghLabel: "Visit M3C GitHub Repository",
  url: "https://ryantixier.github.io/M3C-password-generator/",
  urlLabel: "Visit M3C Application",
  image: tajScreenshot,
  alt: "Random Password Generator Application Screenshot",
  intro: "Random Password Generator",
  description:
    "The aim of this assignment was to create a random password generator to be utilized by employees who have sensitive data. The process was a good learning experience; learning the workflow of JavaScript and rehearsing the content was very valuable. Visit the GitHub repository (linked) for more information.",
};

const frontEnd2 = {
  module: "Module 4 Challenge",
  ghRepo: "https://github.com/ryantixier/M4C-code-quiz",
  ghLabel: "Visit M4C GitHub Repository",
  url: "https://ryantixier.github.io/M4C-code-quiz/",
  urlLabel: "Visit M4C Application",
  image: tajScreenshot,
  alt: "",
  intro: "JavaScript Quiz",
  description:
    "The aim of this assignment was to create a timed quiz that tests the user's JavaScript knowledge. Time is deducted for every incorrect answer until the timer expires, or once all questions are answered. The final score is is saved to local storage. Visit the GitHub repository (linked) for more information.",
};

// const backEnd1 = {
//   intro: "ReadMe Generator",
//   image: "",
//   description:
//     "A program that auto-generates a README.md file based on user specifications. The program is run in the command line interface (CLI) using Node.js. The README.md file is generated in the same directory as the program, and can be copied to the user's project directory.",
//   ghRepo: "",
// };

// const backEnd2 = {
//   intro: "E-Commerce Back-End",
//   image: "",
//   description:
//     "This application reflects a version of back-end code that helps e-commerce sites keep track of site inventory; it utilizes standard CRUD operations: create, read, update, and delete. The application is built with Sequelize and MySQL.",
//   ghRepo: "",
// };

// ... bootcamp back-end

export const Projects = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  //Hooks

  //Functions
  // const scrollToSectionBootcamp = () => {
  //   const pageContentElement = document.getElementById("sectionBootcamp");
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

      {/* freelance */}
      <div
        className="projects-container hide-overflow increase-z"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="projects-title">
          <h2 data-aos="fade-left" data-aos-duration="800">
            Freelance Development
          </h2>
          <h4 data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
            <i>Ryan's Freelance Websites</i>
          </h4>
        </div>
        <div className="projects-content hide-overflow">
          <FreelanceAside
            name={tajInfo.name}
            websiteTitle={tajInfo.websiteTitle}
            websiteUrl={tajInfo.websiteUrl}
            image={tajInfo.image}
            alt={tajInfo.alt}
            description={tajInfo.description}
            codeLanguages={tajInfo.codeLanguages}
            codeEnvironments={tajInfo.codeEnvironments}
            codeLibraries={tajInfo.codeLibraries}
            codeComponents={tajInfo.codeComponents}
            codeWrite={tajInfo.codeWrite}
            codeHost={tajInfo.codeHost}
          />

          <FreelanceAside
            name={pscInfo.name}
            websiteTitle={pscInfo.websiteTitle}
            websiteUrl={pscInfo.websiteUrl}
            image={pscInfo.image}
            alt={pscInfo.alt}
            description={pscInfo.description}
            codeLanguages={pscInfo.codeLanguages}
            codeEnvironments={pscInfo.codeEnvironments}
            codeLibraries={pscInfo.codeLibraries}
            codeComponents={pscInfo.codeComponents}
            codeWrite={pscInfo.codeWrite}
            codeHost={pscInfo.codeHost}
          />
        </div>
      </div>

      <br />
      <div id="sectionBootcamp" />
      <br />

      {/* bootcamp */}
      <div
        className="projects-container hide-overflow"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="projects-title">
          <h2 data-aos="fade-left" data-aos-duration="800">
            Bootcamp Development
          </h2>
          <h4 data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
            <i>Ryan's Bootcamp Submissions</i>
          </h4>
        </div>
        <div className="projects-content hide-overflow">
          <div className="projects-aside">
            <div className="bootcamp-content">
              <div className="bootcamp-title">
                <h2>Front-End Examples:</h2>
                <p>Ryan's Completed Front-End Challenge Assignments...</p>
              </div>
              <BootcampAside
                module={frontEnd1.module}
                ghRepo={frontEnd1.ghRepo}
                ghLabel={frontEnd1.ghLabel}
                url={frontEnd1.url}
                urlLabel={frontEnd1.urlLabel}
                image={frontEnd1.image}
                alt={frontEnd1.alt}
                intro={frontEnd1.intro}
                description={frontEnd1.description}
              />
              <Divider
                color="#abd5ff"
                sx={{ width: "90%", height: "1px", opacity: 0.4 }}
              />
              <BootcampAside
                module={frontEnd2.module}
                ghRepo={frontEnd2.ghRepo}
                ghLabel={frontEnd2.ghLabel}
                url={frontEnd2.url}
                urlLabel={frontEnd2.urlLabel}
                image={frontEnd2.image}
                alt={frontEnd2.alt}
                intro={frontEnd2.intro}
                description={frontEnd2.description}
              />
            </div>
            <div className="projects-aside">
              <div className="bootcamp-title">
                <div>
                  <h3>Back-end Examples:</h3>
                  <p>Ryan's Completed Back-End Challenge Assignments...</p>
                </div>
                {/* CHANGE TO <a> TAG */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
