// IMPORTS
// IMPORTS
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

// ... images

// EXTERNAL ...
// EXTERNAL ...

// ... styles

// ... animations
import AOS from "aos";
import "aos/dist/aos.css";

// ... components

// INLINE ...
// INLINE ...
// INLINE ...

// ... styles

// ... content

export const FreelanceAside = (props) => {
  //Hooks

  //Functions
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <>
      <div className="projects-aside">
        <div className="freelance-title">
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            {props.name}
          </h2>
          <div
            // for animation of <a> tag
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <a href={props.websiteUrl} target="_blank" rel="noreferrer">
              Visit: {props.websiteTitle}
            </a>
          </div>
        </div>
        <div className="freelance-content">
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <img className="freelance-img" src={props.image} alt={props.alt} />
          </div>
          <div
            className="freelance-description"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <span
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <h2>About the site...</h2>
              <p>{props.description}</p>
            </span>
            <ul
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <li>
                <b>Languages:</b>
                <br />
                <span>{props.codeLanguages}</span>
              </li>
              <br />
              <li>
                <b>Runtime Environment:</b>
                <br />
                {props.codeEnvironments}
              </li>
              <br />
              <li>
                <b>Libraries:</b>
                <br />
                {props.codeLibraries}
              </li>
              <br />
              <li>
                <b>Components:</b>
                <br />
                {props.codeComponents}
              </li>
              <br />
              <li>
                <b>Developed in...</b>
                <br />
                {props.codeWrite}
              </li>
              <br />
              <li>
                <b>Hosted on...</b>
                <br />
                {props.codeHost}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelanceAside;
