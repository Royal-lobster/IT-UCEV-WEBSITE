import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
function AboutJntuv() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 300,
    latitude: 18.151687350863902,
    longitude: 83.3738706967883,
    zoom: 16,
  });
  return (
    <>
      <div className="aboutJntuv">
        <h1 className="aboutJntuv__title">
          About <span>JNTUK UCEV</span>
        </h1>
        <p className="aboutJntuv__text">
          The JNTUK University College of Engineering Vizianagaram has been
          established during September 2007 with five Under Graduate Engineering
          Courses Viz., B.Tech. In EEE, ECE, CSE, ME, and IT as a constituent
          college of erstwhile JNTU, Hyderabad. Infrastructure development works
          Phase I was sanctioned by Govt. to a tune of 28.10 Crores and
          commenced the construction work in March, 2008 at Dwarapudi,
          Vizianagaram with an Academic Block, Boys Hostel and Girls Hostel. In
          the year 2008 (20.08.2008) JNTU Kakinada has been established as a
          separate University with this campus as constituent college and
          shifted to own campus at Dwarapudi, Vizianagaram during June,2009.
        </p>
        <ReactMapGL
          className="aboutJntuv__map"
          mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          <Marker
            latitude={18.151687350863902}
            longitude={83.3738706967883}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img src="/images/pin.png" width="30px" />
          </Marker>
        </ReactMapGL>
      </div>

      <style jsx global>
        {`
          .aboutJntuv {
            width: min(900px, 100%);
            margin: 60px auto;
          }
          .aboutJntuv__title {
            color: #ff3e81;
            font-weight: 900;
          }
          .aboutJntuv__text {
            color: #333;
            font-size: 18px;
          }
          .aboutJntuv__map {
            width: 100%;
            margin-top: 30px;
          }
          @media screen and (max-width: 700px) {
            .aboutJntuv {
              padding: 20px;
              margin-top: 20px;
              text-align: center;
            }
            .aboutJntuv__map {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  );
}

export default AboutJntuv;
