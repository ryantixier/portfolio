// IMPORTS
// IMPORTS
// IMPORTS

// general
import * as React from "react";

// material ui icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// LOCAL...
// LOCAL...

// ...styles
import "../assets/App.css";
import "../assets/imageSource.css";

// INLINE...
// INLINE...

// ... styles

export const Header = () => {
  //Hooks

  //Functions

  return (
    <div className="header-container">
      <div className="header-planet" />
      <div className="header-textbox">
        <h1>Welcome to the Portfolio of Ryan Tixier:</h1>
        <h3>
          Full-stack web developer, space nerd, and all around lovable rascal.
        </h3>
      </div>
      <br />
      <ArrowDownwardIcon fontSize="large" id="pageTitle" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Header;
