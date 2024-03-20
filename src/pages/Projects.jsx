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
import pscScreenshot from "../assets/images/website-previews/pscScreenshot.jpeg";
import tajScreenshot from "../assets/images/website-previews/tajScreenshot.jpeg";
import frontM3C from "../assets/images/website-previews/front-M3C.jpeg";
import frontM4C from "../assets/images/website-previews/front-M4C.jpeg";
import backM9C from "../assets/images/website-previews/back-M9C.jpeg";
import backM13C from "../assets/images/website-previews/back-M13C.jpeg";

// EXTERNAL ...
// EXTERNAL ...

// ... animations
import AOS from "aos";
import "aos/dist/aos.css";

// ... MUI components
// import Divider from "@mui/material/Divider";

// INLINE...
// INLINE...

// ... styles
// const dividerStyle = {
//   shape: {
//     width: "70%",
//     height: "1px",
//     opacity: 0.4,
//   },
//   color: "#abd5ff",
// };

// CONTENT/PROPS ...
// CONTENT/PROPS ...

// ... projects content: freelance ...

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

// bootcamp content: page titles

const pageTitles = {
  pageHeader: {
    intro: "Projects",
    subIntro: "Ryan's work on the web.",
  },
  freelance: {
    intro: "Freelance Development",
    subtIntro: "Websites Authored",
  },

  bootcamp: {
    introFeSub: "Front-End",
    introBeSub: "Back-End",
    subIntro: "Example Bootcamp Assignments",
    title: "Bootcamp Development",
    sectionTitle: "University Of Denver (DU) Full-Stack Coding Bootcamp",
  },
};

// ... bootcamp content: full-stack group projects

// const workoutWizard = {
// module: "Workout Wizard",
//   intro: "Full-stack application for tracking workouts",
//   ghRepo: "",
//   ghLabel: "Visit Workout Wizard Repository",
//   url: "",
//   urlLabel: "Work Out with the Wizard",
//   image: frontM4C,
//   alt: "Workout Wizard Application Screenshot",
//   description:
//     "A full-stack application for tracking workouts",
// };

// const codeGauntlet = {
// module: "Code Gauntlet",
//   intro: "Full-stack application for coding challenge",
//   ghRepo: "",
//   ghLabel: "Visit Code Gauntlet Repository",
//   url: "https://ryantixier.github.io/M4C-code-quiz/",
//   urlLabel: "Conquer the Code Gauntlet",
//   image: frontM4C,
//   alt: "Code Gauntlet Application Screenshot",
//   description:
//     "A full-stack application for coding challenges",
// };

// ... bootcamp content: front-end

const sectionContent = {
  frontEnd1: {
    module: "Module 3 Challenge",
    intro: "Random Password Generator",
    ghRepo: "https://github.com/ryantixier/M3C-password-generator",
    ghLabel: "Visit M3C GitHub Repository",
    url: "https://ryantixier.github.io/M3C-password-generator/",
    urlLabel: "Visit M3C Application",
    image: frontM3C,
    alt: "Random Password Generator Application Screenshot",
    description:
      "The aim of this assignment was to create a random password generator to be utilized by employees who have sensitive data. The process was a good learning experience; learning the workflow of JavaScript and rehearsing the content was very valuable. Visit the GitHub repository (linked) for more information.",
  },

  frontEnd2: {
    module: "Module 4 Challenge",
    intro: "JavaScript Quiz",
    ghRepo: "https://github.com/ryantixier/M4C-code-quiz",
    ghLabel: "Visit M4C GitHub Repository",
    url: "https://ryantixier.github.io/M4C-code-quiz/",
    urlLabel: "Visit M4C Application",
    image: frontM4C,
    alt: "Javascript Quiz Application Screenshot",
    description:
      "The aim of this assignment was to create a timed quiz that tests the user's JavaScript knowledge. Time is deducted for every incorrect answer until the timer expires, or once all questions are answered. The final score is is saved to local storage. Visit the GitHub repository (linked) for more information.",
  },

  // bootcamp content: back-end

  backEnd1: {
    module: "Module 9 Challenge",
    intro: "ReadMe Generator",
    ghRepo: "https://github.com/ryantixier/M9C_README-Generator",
    ghLabel: "Visit M9C GitHub Repository",
    url: "",
    urlLabel: "N/A: Back-End application",
    image: backM9C,
    alt: "ReadMe Generator Application Screenshot",
    description:
      "The aim of this assignment was to create a program that auto-generates a README.md file based on user specifications. The program is run in the command line interface (CLI) using Node.js. The README.md file is generated in the same directory as the program, and can be copied to the user's project directory.",
  },

  backEnd2: {
    module: "Module 13 Challenge",
    intro: "E-Commerce Back-End",
    ghRepo: "https://github.com/ryantixier/M13C_E-Commerce-Back-End",
    ghLabel: "Visit M13C GitHub Repository",
    url: "",
    urlLabel: "N/A: Back-End application",
    image: backM13C,
    alt: "E-Commerce Back-End Application Screenshot",
    description:
      "The aim of this assignment was to create a back-end codebase that helps e-commerce sites keep track of site inventory; it utilizes standard CRUD operations: create, read, update, and delete. The application is built with Sequelize and MySQL.",
  },
};

export const Projects = () => {
  //Hooks

  // functions
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
        intro={pageTitles.pageHeader.intro}
        subIntro={pageTitles.pageHeader.subIntro}
      />

      {/* PAGE CONTENT BELOW */}

      {/* freelance */}
      <div className="projects-container hide-overflow increase-z">
        <div className="projects-title">
          <h2
            data-aos="fade-left"
            data-aos-duration="800"
            onTransitionEnd={handleTransitionEnd}
          >
            {pageTitles.freelance.intro}
          </h2>
          <h4
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
            // onTransitionEnd={handleTransitionEnd}
          >
            <i>{pageTitles.freelance.subtIntro}</i>
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
        className="projects-container hide-overflow increase-z"
        data-aos="fade-right"
        data-aos-duration="500"
        // onTransitionEnd={handleTransitionEnd}
      >
        <div className="projects-title">
          <h2
            data-aos="fade-left"
            data-aos-duration="800"
            // onTransitionEnd={handleTransitionEnd}
          >
            {pageTitles.bootcamp.title}
          </h2>
          <h4
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
            // onTransitionEnd={handleTransitionEnd}
          >
            {pageTitles.bootcamp.subIntro}
            {}
          </h4>
        </div>
        <div className="projects-content hide-overflow">
          <div className="projects-aside">
            <div
              className="bootcamp-title"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              // onTransitionEnd={handleTransitionEnd}
            >
              <h3>{pageTitles.bootcamp.sectionTitle}</h3>
              <h2>
                <i>{pageTitles.bootcamp.introFeSub}</i>
              </h2>
            </div>
            <BootcampAside
              module={sectionContent.frontEnd1.module}
              ghRepo={sectionContent.frontEnd1.ghRepo}
              ghLabel={sectionContent.frontEnd1.ghLabel}
              url={sectionContent.frontEnd1.url}
              urlLabel={sectionContent.frontEnd1.urlLabel}
              image={sectionContent.frontEnd1.image}
              alt={sectionContent.frontEnd1.alt}
              intro={sectionContent.frontEnd1.intro}
              description={sectionContent.frontEnd1.description}
            />

            {/* <Divider color={dividerStyle.color} sx={dividerStyle.shape} />
            <Divider color={dividerStyle.color} sx={dividerStyle.shape} /> */}

            <BootcampAside
              module={sectionContent.frontEnd2.module}
              ghRepo={sectionContent.frontEnd2.ghRepo}
              ghLabel={sectionContent.frontEnd2.ghLabel}
              url={sectionContent.frontEnd2.url}
              urlLabel={sectionContent.frontEnd2.urlLabel}
              image={sectionContent.frontEnd2.image}
              alt={sectionContent.frontEnd2.alt}
              intro={sectionContent.frontEnd2.intro}
              description={sectionContent.frontEnd2.description}
            />
          </div>

          <div className="projects-aside">
            <div
              className="bootcamp-title"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              // onTransitionEnd={handleTransitionEnd}
            >
              <h3>{pageTitles.bootcamp.sectionTitle}</h3>
              <h2>
                <i>{pageTitles.bootcamp.introBeSub}</i>
              </h2>
            </div>
            <BootcampAside
              module={sectionContent.backEnd1.module}
              ghRepo={sectionContent.backEnd1.ghRepo}
              ghLabel={sectionContent.backEnd1.ghLabel}
              url={sectionContent.backEnd1.url}
              urlLabel={sectionContent.backEnd1.urlLabel}
              image={sectionContent.backEnd1.image}
              alt={sectionContent.backEnd1.alt}
              intro={sectionContent.backEnd1.intro}
              description={sectionContent.backEnd1.description}
            />

            {/* <Divider color={dividerStyle.color} sx={dividerStyle.shape} />
            <Divider color={dividerStyle.color} sx={dividerStyle.shape} /> */}

            <BootcampAside
              module={sectionContent.backEnd2.module}
              ghRepo={sectionContent.backEnd2.ghRepo}
              ghLabel={sectionContent.backEnd2.ghLabel}
              url={sectionContent.backEnd2.url}
              urlLabel={sectionContent.backEnd2.urlLabel}
              image={sectionContent.backEnd2.image}
              alt={sectionContent.backEnd2.alt}
              intro={sectionContent.backEnd2.intro}
              description={sectionContent.backEnd2.description}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
