import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";

import Socialicons from "./components/Socialicons.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Socialicons />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
