import React from "react";
import Navbar from "./print/navbar";
import Footer from "./shop/footer";
import Hero from "./shop/hero";
import Breadcrumb from "./shop/breadcrumb";
import "bootstrap/dist/css/bootstrap.css";

const shop = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <Hero />
      <Footer />
    </div>
  );
};

export default shop;
