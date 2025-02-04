import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Whatsapppop from "../../components/Popup/Whatsapppop";

function Homepage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="  bg-red-300"></div>
      <HeroSection />
      <FeatureSection />
      <Testimonials />

      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
