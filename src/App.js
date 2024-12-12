import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BackgroundChanger from "./Components/BackgroundChanger";
import VideoBackground from "./Components/Videobackground";
import Sections from "./Components/Sections";
import Footer from "./Components/Footer";

const App = () => {
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const productsref = useRef(null);
  const routinesref = useRef(null);
  const contactref = useRef(null);
  const scrollToSection = (section) => {
    console.log(section);

    switch (section) {
      case "homeref":
        homeref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "aboutref":
        aboutref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "productsref":
        productsref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "routinesref":
        routinesref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contactref":
        contactref.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        break;
    }
  };
  return (
    <Router>
      <div className="relative">
        {/* Background Changer */}
        <VideoBackground />

        {/* Fixed Navbar */}
        <Navbar scrollToSection={(section) => scrollToSection(section)} />

        {/* Page Routes */}
        <div className="pt-16">
          {" "}
          {/* Adds padding to avoid overlapping with navbar */}
          <Routes>
            <Route
              path="/*"
              element={
                <Sections
                  homeref={homeref}
                  aboutref={aboutref}
                  productsref={productsref}
                  routinesref={routinesref}
                  contactref={contactref}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
