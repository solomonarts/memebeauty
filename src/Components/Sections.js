import React, { useRef } from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Routines from "../Pages/Routines";
import Contact from "../Pages/Contact";

function Sections({ homeref, aboutref, productsref, routinesref, contactref }) {
  return (
    <div>
      <Home homeref={homeref} />
      <About aboutref={aboutref} />
      <Products productsref={productsref} />
      <Routines routinesref={routinesref}  />
      <Contact contactref={contactref} />
    </div>
  );
}

export default Sections;
