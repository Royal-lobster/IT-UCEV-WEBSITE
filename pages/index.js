import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutJntuv from "../components/AboutJntuv";
import PostSection from "../components/LatestNewsSection";
import HODMessage from "../components/HODMessage";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
function index() {
  return (
    <div>
      <Navbar homepage active="home" />
      <Hero />
      <AboutJntuv />
      <Mission />
      <HODMessage />
      <PostSection />
      <Footer />
    </div>
  );
}

export default index;
