import React, { useState } from "react";
import Hero from "./components/Hero";
import "./assets/css/index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          <Route path="/portfolio-website/" element={<Hero />} />
          <Route path="/portfolio-website/skills" element={<Skills />} />
          <Route path="/portfolio-website/experience" element={<Experience />} />
          <Route path="/portfolio-website/education" element={<Education />} />
          <Route path="/portfolio-website/contact" element={<Contact />} />
          <Route path="/portfolio-website/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
