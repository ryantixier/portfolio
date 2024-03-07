// IMPORTS

// general
import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// local

// ...styles
import "./assets/App.css";
import "./assets/imageSource.css";

// ...pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// ... comps
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// sparkley
import ReactSparkle from "react-sparkle";

function App() {
  return (
    <>
      <ReactSparkle
        color="white"
        count={20}
        minSize={7}
        maxSize={12}
        overflowPx={0}
        fadeOutSpeed={0.7}
        flicker={false}
      />
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <br />
        <br />
        <br />
        <Footer />
      </Router>
    </>
  );
}

export default App;
