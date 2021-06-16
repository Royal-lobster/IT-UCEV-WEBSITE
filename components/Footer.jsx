import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <p>
          © Copyright 2021 Jawaharlal Nehru Technological University Kakinada -
          UCEV Vizianagaram. All Rights Reserved.
        </p>
        <p className="footer__licence">
          This website is licenced under{" "}
          <a href="https://opensource.org/licenses/MIT">MIT License</a>.{" "}
          <a href="https://github.com/Royal-lobster/IT-UCEV-WEBSITE">
            (Click to Contribute)
          </a>
        </p>
      </footer>
      <style jsx global>{`
        footer {
          background-color: #222;
          padding: 20px;
          text-align: center;
          color: #ccc;
        }
        .footer__licence {
          border-top: 1px solid #333;
          padding-top: 10px;
          display: inline-block;
          margin: 0 auto;
          color: #ccc;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

export default Footer;
