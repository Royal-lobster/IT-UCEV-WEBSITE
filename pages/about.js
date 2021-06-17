import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HaveToDo from "../components/HaveToDo";

function about() {
  return (
    <div>
      <Navbar active="about" />
      <HaveToDo pageName="About" />
      <Footer />
    </div>
  );
}

export default about;
