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

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Portfolio />} />
          <Route path="/meet-the-team" element={<Resume />} />
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
