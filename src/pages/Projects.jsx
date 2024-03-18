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
import FreelanceAside from "../components/FreelanceAside";

// ... images
import pscScreenshot from "../assets/images/website-previews/pscScreenshot.png";
import tajScreenshot from "../assets/images/website-previews/tajScreenshot.png";

// EXTERNAL ...
// EXTERNAL ...

// ... animations
import AOS from "aos";
import "aos/dist/aos.css";

// INLINE...

// ... content
const pageHeaderContent = {
  intro: "Projects",
  subIntro: "Ryan's work on the web.",
};

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
  websiteTitle: "(N/A: Coming Soon)",
  websiteUrl: "(N/A: Coming Soon)",
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
          <h2 data-aos="fade-left" data-aos-duration="800" data-aod-delay="100">
            Freelance Development
          </h2>
          <h4 data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            Ryan's Freelance Websites
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
        <div className="projects-title ">
          <h2 data-aos="fade-left" data-aos-duration="800">
            Bootcamp Development
          </h2>
          <h4 data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            Ryan's Bootcamp Assignments
          </h4>
        </div>
        <div className="projects-content hide-overflow">
          <div className="projects-aside">
            <div className="bootcamp-title">
              <h3>Front-end Examples</h3>
              <div>
                {/* CHANGE TO <a> TAG */}
                Visit Application
              </div>
              <br />
              <div>
                {/* CHANGE TO <a> TAG */}
                Visit GitHub Repository
              </div>
            </div>
            <div className="bootcamp-content">
              {/* FE bootcamp content goes here */}
              {/* FE bootcamp content goes here */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus maxime, laboriosam, mollitia voluptas dicta, at
                voluptatem voluptates reprehenderit eligendi enim expedita
                praesentium itaque magni adipisci blanditiis cupiditate. Aut,
                optio nobis.
              </p>
            </div>
          </div>
          <div className="projects-aside">
            <div className="bootcamp-title">
              <h3>Back-end Examples</h3>
              <div>
                {/* CHANGE TO <a> TAG */}
                Visit Application
              </div>
              <br />
              <div>
                {/* CHANGE TO <a> TAG */}
                Visit GitHub Repository
              </div>
            </div>
            <div className="bootcamp-content">
              {/* BE bootcamp content goes here */}
              {/* BE bootcamp content goes here */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus maxime, laboriosam, mollitia voluptas dicta, at
                voluptatem voluptates reprehenderit eligendi enim expedita
                praesentium itaque magni adipisci blanditiis cupiditate. Aut,
                optio nobis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
