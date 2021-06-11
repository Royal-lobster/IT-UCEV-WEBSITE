import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
function index() {
  let pages = [{name: "Home", isActive: true, url: "#"}, {name: "About", isActive: false, url: "#"}, {name: "Faculty", isActive: false, url: "#"}, {name: "Placements", isActive: false, url: "#"}, {name: "MOUs", isActive: false, url: "#"}]
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      <Navbar pages={pages}/>
      <Hero/>
    </div>
  )
}

export default index
