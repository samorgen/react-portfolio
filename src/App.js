import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [sections] = useState([
    { name: "About", htmlTag: <About></About> },
    { name: "Portfolio", htmlTag: <Portfolio></Portfolio> },
    { name: "Contact", htmlTag: <Contact></Contact> },
    { name: "Resume", htmlTag: <Resume></Resume> },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Nav
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Nav>
      {currentSection.htmlTag}
      <Footer />
    </div>
  );
}

export default App;
