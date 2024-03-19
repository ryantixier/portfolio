// IMPORTS
// IMPORTS
// IMPORTS

// GENERAL
// GENERAL
import * as React from "react";
import { useEffect, useState } from "react";
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

// ... MUI components
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";

// ... MUI icons
import LaunchIcon from "@mui/icons-material/Launch";

// INLINE ...
// INLINE ...
// INLINE ...

// ... styles
const chipStyle = {
  color: "white",
  backgroundColor: "#35557120",
  marginTop: "-3px",
  width: "300px",
  border: "#6094c140 2px solid",
  boxShadow: "0px 0px 10px 0px #6094c140",
  "&:hover": {
    // backgroundColor: "#35557140",
    boxShadow: "0px 0px 10px 0px #6094c180",
  },
};

const iconButtonStyle = {
  // width: "100%",
  justifyContent: "center",
  position: "relative",
  zIndex: 10,
};

// ... content

export const FreelanceAside = (props) => {
  //Hooks
  const [urlPresent, setUrlPresent] = useState(true);

  console.log(props.websiteUrl);

  const disableLink = () => {
    if (props.websiteUrl === undefined || props.websiteUrl === "") {
      setUrlPresent(false);
    } else {
      setUrlPresent(true);
    }
  };

  //Functions
  useEffect(() => {
    AOS.init({ once: false });
    disableLink();
  }, [props.websiteUrl]);

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
            <IconButton
              href={props.websiteUrl}
              disable={!urlPresent}
              target="_blank"
              rel="noreferrer"
              sx={iconButtonStyle}
            >
              <Chip
                icon={<LaunchIcon color="white" fontSize="inherit" />}
                label={props.websiteTitle}
                sx={
                  urlPresent
                    ? chipStyle
                    : {
                        color: "white",
                        backgroundColor: "#00000020",
                        marginTop: "-3px",
                        width: "300px",
                        border: "#00000040 2px solid",
                      }
                }
              />
            </IconButton>
            {/* <a href={props.websiteUrl} target="_blank" rel="noreferrer">
              Visit: {props.websiteTitle}
            </a> */}
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
                <b>Component Libraries:</b>
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
