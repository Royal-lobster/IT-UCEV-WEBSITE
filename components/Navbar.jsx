import React from "react";
import Image from "next/image";
function Navbar({ pages }) {
  return (
    <>
      <nav className="nav">
        <div className="nav__branding">
          <Image src="/images/jntuk_logo.png" width="60" height="60" />
          <div className="nav__logo">
            <h1>JNTUK UCEV</h1>
            <h2>Information Technology</h2>
          </div>
        </div>
        <div className="nav__links">
          {pages.map((page) => {
            return (
              <a
                key={page.name}
                className={`nav__link ${page.isActive && "nav__link--active"}`}
                href={page.url}
              >
                {page.name}
              </a>
            );
          })}
        </div>
      </nav>
      <style jsx global>
        {`
          nav {
            display: flex;
            position: absolute;
            z-index: 999;
            left: 0;
            right: 0;
            justify-content: space-around;
            align-items: center;
            background-color: transparent;
            padding: 30px 10px;
            color: #eee;
          }
          .nav__branding {
            display: flex;
            gap: 20px;
          }
          .nav__branding img {
            background-color: #eee;
            border-radius: 8px;
            padding: 10px;
          }
          .nav__logo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
          }
          .nav__logo h1,
          .nav__logo h2 {
            margin: 0;
            padding: 0;
          }
          .nav__logo h1 {
            font-size: 24px;
            font-weight: 900;
            color: #fff;
          }
          .nav__logo h2 {
            font-size: 14px;
            font-weight: 400;
          }
          .nav__links {
            display: flex;
            gap: 10px;
            max-width: 90vw;
            overflow-x: scroll;
          }
          .nav__links {
            -ms-overflow-style: none; /* Internet Explorer 10+ */
            scrollbar-width: none; /* Firefox */
          }
          .nav__links::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
          .nav__link {
            display: block;
            border: 2px solid transparent;
            transition: all 0.3s ease-in-out;
            padding: 5px;
          }
          .nav__link:hover {
            border-bottom: 2px solid #eee;
          }
          .nav__link--active {
            background-color: #ff3f81;
            color: white;
            border-radius: 8px;
          }

          @media screen and (max-width: 700px) {
            nav {
              border-bottom: 1px solid #eee;
              position: relative;
              background-color: #23153c;
            }
            .nav__links {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
