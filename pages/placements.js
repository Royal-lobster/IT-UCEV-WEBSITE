import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HaveToDo from "../components/HaveToDo";

function placements() {
  return (
    <div>
      <Navbar active="placements" />
      <HaveToDo pageName="placements" />
      <Footer />
    </div>
  );
}

export default placements;
