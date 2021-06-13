import React from "react";
function AboutJntuv() {
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15165.112094766891!2d83.36691852477446!3d18.151102102001676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU%20Vizianagaram!5e0!3m2!1sen!2sin!4v1623559635361!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <style jsx global>
        {`
          .aboutJntuv {
            width: min(900px, 100%);
            margin: 30px auto;
            padding: min(30px);
          }
          .aboutJntuv__title {
            color: #ff3e81;
            font-weight: 900;
          }
          .aboutJntuv__text {
            color: #333;
            font-size: 18px;
            margin-bottom: 40px;
          }
          .aboutJntuv__map {
            width: 100%;
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
            .aboutJntuv__text {
              font-size: 16px;
              margin-bottom: 30px;
              line-height: 1.5;
            }
            .aboutJntuv__title {
              border-bottom: 1px solid #ff3e81;
              padding-bottom: 15px;
            }
          }
        `}
      </style>
    </>
  );
}

export default AboutJntuv;
