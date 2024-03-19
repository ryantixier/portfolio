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

// EXTERNAL ...
// EXTERNAL ...

// ... styles

// ... animations
import AOS from "aos";

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
  width: "250px",
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

// ... content

export const BootcampAside = (props) => {
  //Hooks
  const [urlPresent, setUrlPresent] = useState(true);

  //Functions

  console.log(props.websiteUrl);

  const disableLink = () => {
    if (props.url === undefined || props.url === "") {
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
      <div className="bootcamp-content">
        <div className="bootcamp-subtitle">
          <h3>
            {props.module}: {props.intro}
          </h3>
        </div>
        <div className="bootcamp-description">
          <div className="bootcamp-description-left">
            <img src={props.image} alt={props.alt} className="bootcamp-img" />
            <br />
            <IconButton
              href={props.ghRepo}
              target="_blank"
              rel="noreferrer"
              sx={iconButtonStyle}
            >
              <Chip
                icon={<LaunchIcon color="white" fontSize="inherit" />}
                label={props.ghLabel}
                sx={chipStyle}
              />
            </IconButton>
            <IconButton
              href={props.url}
              disabled={!urlPresent}
              target="_blank"
              rel="noreferrer"
              sx={iconButtonStyle}
            >
              <Chip
                icon={<LaunchIcon color="white" fontSize="inherit" />}
                label={props.urlLabel}
                sx={chipStyle}
              />
            </IconButton>
          </div>
          <div
            className="bootcamp-description-right"
            // data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
          >
            <h3>Assignment Description:</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootcampAside;
