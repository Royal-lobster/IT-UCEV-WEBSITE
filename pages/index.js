import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutJntuv from "../components/AboutJntuv";
import PostSection from "../components/LatestNewsSection";
function index() {
  let pages = [
    { name: "Home", isActive: true, url: "#" },
    { name: "About", isActive: false, url: "#" },
    { name: "Faculty", isActive: false, url: "#" },
    { name: "Placements", isActive: false, url: "#" },
    { name: "MOUs", isActive: false, url: "#" },
  ];
  return (
    <div>
      <Navbar pages={pages} />
      <Hero />
      <AboutJntuv />
      <PostSection />
    </div>
  );
}

export default index;
