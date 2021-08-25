import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HaveToDo from "../components/HaveToDo";

function placements() {
  return (
    <div>
      <Navbar active="courses" />
      <HaveToDo pageName="courses" />
      <Footer />
    </div>
  );
}

export default placements;
