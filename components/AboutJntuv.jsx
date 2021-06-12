import React from "react";

function AboutJntuv() {
  return (
    <>
      <div className="aboutJntuv">
        <h1 className="aboutJntuv__title">About JNTUK UCEV</h1>
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
      </div>

      <style jsx>
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
        `}
      </style>
    </>
  );
}

export default AboutJntuv;
