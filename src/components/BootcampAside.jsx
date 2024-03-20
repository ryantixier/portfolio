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
  padding: "20px",
  width: "100%",
  // minWidth: "100%",
  // maxWidth: "100%",
  border: "#6094c140 2px solid",
  boxShadow: "0px 0px 10px 0px #6094c140",
  "&:hover": {
    backgroundColor: "#35557140",
    boxShadow: "0px 0px 10px 0px #6094c180",
  },
};

const iconButtonStyle = {
  justifyContent: "center",
  position: "relative",
  zIndex: 10,
};

export const BootcampAside = (props) => {
  //Hooks
  const [urlPresent, setUrlPresent] = useState(true);
  const [ghRepoPresent, setGhRepoPresent] = useState(true);

  //Functions

  // console.log(props.websiteUrl);

  const disableLink = useCallback(() => {
    // detects if the prop has a website link (FE) or not (BE)
    if (props.url === undefined || props.url === "") {
      setUrlPresent(false);

      // console.log("url not present");
    } else {
      setUrlPresent(true);

      // console.log("url present");
    }

    // detects if the prop has a github rep link or not
    if (props.ghRepo === undefined || props.ghRepo === "") {
      setGhRepoPresent(false);
      // console.log("ghRepo not present");
    } else {
      setGhRepoPresent(true);
      // console.log("ghRepo present");
    }
  }, [props.url, props.ghRepo]);

  useEffect(() => {
    disableLink();
    AOS.init({ once: true });
    // AOS.refresh();
  }, [disableLink]);

  return (
    <>
      <div className="bootcamp-content">
        <div
          className="bootcamp-subtitle"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
          // onTransitionEnd={handleTransitionEnd}
        >
          <h3>
            {props.module}: {props.intro}
          </h3>
        </div>
        <div className="bootcamp-description">
          <div className="bootcamp-description-left">
            <img
              src={props.image}
              alt={props.alt}
              className="bootcamp-img"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
              // onTransitionEnd={handleTransitionEnd}
            />
          </div>
          <div
            className="bootcamp-description-right"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
            // onTransitionEnd={handleTransitionEnd}
          >
            <h3>Assignment Description:</h3>
            <p>{props.description}</p>
          </div>
        </div>
        <div className="bootcamp-description-bottom">
          <IconButton
            href={props.ghRepo}
            disabled={!ghRepoPresent}
            target="_blank"
            rel="noreferrer"
            sx={iconButtonStyle}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            // onTransitionEnd={handleTransitionEnd}
          >
            <Chip
              icon={<LaunchIcon color="white" fontSize="inherit" />}
              label={props.ghLabel}
              sx={chipStyle}
            />
          </IconButton>
          {urlPresent ? (
            <IconButton
              href={props.url}
              disabled={!urlPresent}
              target="_blank"
              rel="noreferrer"
              sx={iconButtonStyle}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              // onTransitionEnd={handleTransitionEnd}
            >
              <Chip
                icon={<LaunchIcon color="white" fontSize="inherit" />}
                label={props.urlLabel}
                sx={chipStyle}
              />
            </IconButton>
          ) : (
            <br />
          )}
        </div>
      </div>
    </>
  );
};

export default BootcampAside;
