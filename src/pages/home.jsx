import React from "react";
import Navbar from "./print/navbar";
import Footer from "./shop/footer";
import Hero from "./home/hero";
import Banner from "./home/banner";
import Gallery from "./home/gallery";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default home;
