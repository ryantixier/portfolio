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
  subIntro: "Ryan's work on the web.",
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
      <div className="projects-container hide-overflow">
        <div className="projects-title">
          <h2 data-aos="fade-up" data-aos-duration="800">
            Freelance Development
          </h2>
          <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            Ryan's Freelance Websites
          </h4>
        </div>
        <div className="projects-content hide-overflow">
          <div className="projects-aside">
            <div className="freelance-title">
              <h3>The TAJ Salon</h3>
              <a
                href="https://thetajsalon.com"
                target="_blank"
                rel="noreferrer"
              >
                thetajsalon.com
              </a>
            </div>
            <div className="freelance-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente totam assumenda, accusamus sint reiciendis nisi enim
                iure tenetur ut incidunt exercitationem, perspiciatis debitis
                harum dolore fugit qui rerum perferendis facere.
              </p>
            </div>
          </div>

          <div className="projects-aside">
            <div className="freelance-title">
              <h3>Playground Safety Consultants</h3>
              <p>(Website coming April 2024)</p>
            </div>
            <div className="freelance-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                tempora aut cum reiciendis asperiores, culpa repellat omnis ab?
                Hic eveniet possimus quam eius quisquam veritatis ipsum iste
                ratione optio alias.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div id="sectionBootcamp" />
      <br />

      {/* bootcamp */}
      <div className="projects-container">
        <div className="projects-title">
          <h2 data-aos="fade-up" data-aos-duration="800">
            Bootcamp Development
          </h2>
          <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
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
