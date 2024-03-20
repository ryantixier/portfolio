// IMPORTS
// IMPORTS
// IMPORTS

// GENERAL
// GENERAL
import * as React from "react";
import { useEffect, useState, useCallback } from "react";

// LOCAL ...
// LOCAL ...

// ... styles
import "../assets/App.css";
import "../assets/imageSource.css";

// EXTERNAL ...
// EXTERNAL ...

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

// ... styles
const chipStyle = {
  color: "white",
  background: "linear-gradient(0deg, #00000039 0%, #5d90c360 100%)",
  marginTop: "-10px",
  padding: "20px",
  minWidth: "230px",
  maxWidth: "100%",
  border: "#6094c140 2px solid",
  boxShadow: "0px 0px 10px 0px #6094c140",
  "&:hover": {
    backgroundColor: "#35557140",
    boxShadow: "0px 0px 10px 0px #6094c180",
  },
};

const chipStyleDisabled = {
  color: "white",
  background: "#00000020",
  marginTop: "-10px",
  padding: "20px",
  minWidth: "230px",
  maxWidth: "100%",
  border: "#00000040 2px solid",
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

  // console.log(props.websiteUrl);

  const disableLink = useCallback(() => {
    if (props.websiteUrl === undefined || props.websiteUrl === "") {
      setUrlPresent(false);
    } else {
      setUrlPresent(true);
    }
  }, [props.websiteUrl]);
  //Functions
  useEffect(() => {
    disableLink();
    AOS.init({ once: true });
  }, [disableLink]);

  // const handleTransitionEnd = () => {
  //   AOS.refresh();
  //   console.log("AOS refreshed");
  // };

  return (
    <>
      <div className="projects-aside">
        <div className="freelance-title">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
            // onTransitionEnd={handleTransitionEnd}
            // onTransitionEnd={console.log("transition end")}
          >
            {props.name}
          </h1>
          <IconButton
            href={props.websiteUrl}
            disabled={!urlPresent}
            target="_blank"
            rel="noreferrer"
            sx={iconButtonStyle}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
            // onTransitionEnd={handleTransitionEnd}
          >
            <Chip
              icon={<LaunchIcon color="white" fontSize="inherit" />}
              label={props.websiteTitle}
              sx={!urlPresent ? chipStyleDisabled : chipStyle}
            />
          </IconButton>
        </div>
        <div className="freelance-content">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            // onTransitionEnd={handleTransitionEnd}
          >
            <img className="freelance-img" src={props.image} alt={props.alt} />
          </div>
          <div
            className="freelance-description"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            // onTransitionEnd={handleTransitionEnd}
          >
            <span
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="550"
              // onTransitionEnd={handleTransitionEnd}
            >
              <h2>About the site...</h2>
              <p>{props.description}</p>
            </span>
            <ul
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="550"
              // onTransitionEnd={handleTransitionEnd}
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
