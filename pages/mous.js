import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HaveToDo from "../components/HaveToDo";

function mous() {
  return (
    <div>
      <Navbar active="mous" />
      <HaveToDo pageName="MOUs" />
      <Footer />
    </div>
  );
}

export default mous;
