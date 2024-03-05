import React from "react";
// import Nav from "./services/Nav";
import Navbar from "./print/navbar";
import Hero from "./services/hero";
import Hero2 from "./services/hero2";
import Hero3 from "./services/hero3";

const Services = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
    </div>
  );
};

export default Services;
