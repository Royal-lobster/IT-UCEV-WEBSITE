import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";
function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div>
        <div className="hero">
          <div className="hero__background" ref={myRef} />
          <div className="hero__Text">
            <h1>Information Technology</h1>
            <h3>
              To achieve academic excellence for the department of Information
              Technology by imparting in-depth knowledge to the students, cater
              to the ever changing industrial demands and societal needs.
            </h3>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      <style jsx>{`
        .hero {
          position: relative;
          background-color: #23153c;
        }
        .hero__Text {
          position: absolute;
          top: 15%;
          left: 10vw;
          max-width: 800px;
          padding: 5vw;
          color: white;
        }
        .hero__Text h1 {
          font-size: min(60px, 15vw);
          font-weight: 900;
          color: #ff3e81;
        }
        .hero__Text h3 {
          font-size: min(20px, 8vw);
          font-weight: 300;
          border-left: 3px solid #ff3e81;
          padding-left: 30px;
        }
        .hero__background {
          height: 600px;
        }

        @media screen and (max-width: 700px) {
          .hero__background {
            filter: blur(4px);
          }
          .hero__Text {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding-top: 20%;
            margin-left: 20px;
          }
          .hero__Text h3 {
            padding-left: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;
