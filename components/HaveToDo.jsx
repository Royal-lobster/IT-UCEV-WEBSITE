import React from "react";

function HaveToDo({ pageName }) {
  return (
    <>
      <div className="haveToDo">
        <div className="haveToDo__wraper">
          <h1>
            Please contribute to make this <br /> {pageName} page
          </h1>
          <a href="https://github.com/Royal-lobster/IT-UCEV-WEBSITE">
            (Click to Contribute)
          </a>
        </div>
      </div>
      <style jsx>{`
        .haveToDo {
          background-color: #eee;
          padding: 0;
          display: grid;
          place-items: center;
          margin: 0;
          min-height: 70vh;
        }
        .haveToDo__wraper {
          margin: 0;
          color: #444;
          padding: 60px;
          text-align: center;
          max-width: min(90vw, 600px);
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
            0 6.7px 5.3px rgba(0, 0, 0, 0.028),
            0 12.5px 10px rgba(0, 0, 0, 0.035),
            0 22.3px 17.9px rgba(0, 0, 0, 0.042),
            0 41.8px 33.4px rgba(0, 0, 0, 0.05),
            0 100px 80px rgba(0, 0, 0, 0.07);
        }
        .haveToDo__wraper h1 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .haveToDo__wraper a {
          background-color: #ff3f81;
          padding: 10px 20px;
          color: white;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default HaveToDo;
