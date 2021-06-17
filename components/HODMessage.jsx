import Image from "next/image";
import React from "react";
function HODMessage() {
  return (
    <>
      <div className="hodMessage">
        <h1 className="hodMessage__title">HOD Message</h1>
        <div className="hodMessage__content">
          <div className="hodMessage__imgText">
            <p>
              I would like to extend my warmest welcome to the department of
              Information Technology. Today we find that information technology
              has become over whelming concept. Our department has remained true
              to the vision on which it was founded. Over the years we have
              developed a distinct style and method that bridges the theory –
              practice divide while remaining grounded in the core. Technology
              changes rapidly, especially in the field of computing, whereas the
              science, if it changes at all, does so much more gradually.Our
              understanding is that persons who are clear and thorough about the
              fundamentals can adapt to rapid changes in technology relatively
              easily. Our Department has produced hundreds of professionals and
              has established a name for itself in the country and abroad.
            </p>
            <div className="hodMessage__imgAndCaption">
              <Image src="/images/hod_image.jpg" height="200" width="300" />
              <div className="hodMessage__caption">
                <h4>Dr.G.Jaya Suma </h4>
                <p>
                  Professor, HoD & OSD-JNTUK, Kurupam JNTUK University College
                  of Engineering
                </p>
              </div>
            </div>
          </div>
          <p className="hodMessage__text">
            They have consistently excelled in the highly competitive industrial
            environment. They are given a strong foundation in information
            technology and problem-solving techniques, and are made adaptable to
            changes. Through educational leadership, research and development,
            intellectual partnerships and community outreach, we seek to improve
            technology and society. Students work alongside faculty members who
            are leaders in their respective disciplines, have access to labs
            equipped with the latest technologies, and are connected to a
            comprehensive University providing breadth and depth of
            opportunities. As a result, our students acquire critical thinking
            capabilities as well as practically oriented skills that are prized
            by prestigious companies and academic institutions.
          </p>
        </div>
      </div>

      <style jsx global>
        {`
          .hodMessage {
            width: min(900px, 100%);
            margin: 30px auto;
            padding: min(30px);
            border-radius: 12px;
            border: 1px solid #ccc;
          }
          .hodMessage__title {
            color: #ff3e81;
            font-weight: 900;
          }
          .hodMessage__imgText {
            flex: 1;
            display: flex;
            color: #333;
            font-size: 18px;
            align-items: center;
            justify-content: space-evenly;
            margin-bottom: 40px;
            gap: 20px;
          }
          .hodMessage__caption {
            width: 300px;
            font-size: 14px;
            font-weight: 600;
          }
          .hodMessage__caption h4 {
            margin: 5px 0;
            font-size: 18px;
          }
          .hodMessage__caption p {
            margin: 0;
          }
          .hodMessage__imgText p {
            flex: 2;
          }
          .hodMessage__imgText img {
            flex: 1;
            border-radius: 8px;
            box-shadow: 0 1.3px 2.2px rgba(0, 0, 0, 0.017),
              0 3.1px 5.3px rgba(0, 0, 0, 0.024),
              0 5.9px 10px rgba(0, 0, 0, 0.03),
              0 10.5px 17.9px rgba(0, 0, 0, 0.036),
              0 19.6px 33.4px rgba(0, 0, 0, 0.043),
              0 47px 80px rgba(0, 0, 0, 0.06);
          }
          .hodMessage__text {
            color: #333;
            flex: 1;
            font-size: 18px;
            margin-bottom: 40px;
          }
          .hodMessage__map {
            width: 100%;
          }
          @media screen and (max-width: 910px) {
            .hodMessage {
              padding: 20px;
              margin-top: 20px;
              border: 0;
            }
            .hodMessage__map {
              width: 80%;
            }
            .hodMessage__imgText {
              flex-direction: column;
            }
            .hodMessage__text,
            .hodMessage__imgText {
              font-size: 16px;
              margin-bottom: 30px;
              line-height: 1.5;
            }
            .hodMessage__title {
              border-bottom: 1px solid #ff3e81;
              padding-bottom: 15px;
            }
          }
        `}
      </style>
    </>
  );
}

export default HODMessage;
