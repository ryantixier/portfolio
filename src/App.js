// IMPORTS

// general
import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// local
// ... comps
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// ...styles
import "./assets/App.css";

// sparkley
import ReactSparkle from "react-sparkle";

function App() {
  return (
    <>
      <Router>
        <ReactSparkle
          color="white"
          count={25}
          minSize={7}
          maxSize={12}
          overflowPx={0}
          fadeOutSpeed={0.5}
          flicker={false}
        />
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
