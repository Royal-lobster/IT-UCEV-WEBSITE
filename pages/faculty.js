import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HaveToDo from "../components/HaveToDo";

function faculty() {
  return (
    <div>
      <Navbar active="faculty" />
      <HaveToDo pageName="Faculty" />
      <Footer />
    </div>
  );
}

export default faculty;
