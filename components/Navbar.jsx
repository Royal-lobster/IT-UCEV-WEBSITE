import React, { useRef } from "react";
import Image from "next/image";
function Navbar({ pages }) {
  const hamMenu = useRef(null);
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
        <div
          className="navbar__hamburger"
          id="hamburger-icon"
          onClick={() => hamMenu.current.classList.toggle("open")}
          ref={hamMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
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
              border-bottom: 1px solid #603c9e;
              position: relative;
              background-color: #23153c;
              justify-content: space-between;
              padding: 20px 20px;
            }

            /* Hamburger Icon and Animation */
            #hamburger-icon {
              width: 24px;
              height: 24px;
              position: relative;
              -webkit-transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
              -webkit-transition: 0.5s ease-in-out;
              -moz-transition: 0.5s ease-in-out;
              -o-transition: 0.5s ease-in-out;
              transition: 0.5s ease-in-out;
              cursor: pointer;
            }
            #hamburger-icon span {
              display: block;
              position: absolute;
              height: 2px;
              width: 100%;
              background: #fff;
              opacity: 1;
              left: 0px;
              -webkit-transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
              -webkit-transition: 0.25s ease-in-out;
              -moz-transition: 0.25s ease-in-out;
              -o-transition: 0.25s ease-in-out;
              transition: 0.25s ease-in-out;
            }
            #hamburger-icon span:nth-child(1) {
              top: 4px;
            }
            #hamburger-icon span:nth-child(2),
            #hamburger-icon span:nth-child(3) {
              top: 12px;
            }
            #hamburger-icon span:nth-child(4) {
              top: 20px;
            }
            #hamburger-icon.open span:nth-child(1) {
              top: 12px;
              width: 0%;
              left: 50%;
            }
            #hamburger-icon.open span:nth-child(2) {
              -webkit-transform: rotate(45deg);
              -moz-transform: rotate(45deg);
              -o-transform: rotate(45deg);
              transform: rotate(45deg);
            }
            #hamburger-icon.open span:nth-child(3) {
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              -o-transform: rotate(-45deg);
              transform: rotate(-45deg);
            }
            #hamburger-icon.open span:nth-child(4) {
              top: 12px;
              width: 0%;
              left: 50%;
            }
            /* Hamburger Icon and Animation end */
            .nav__links {
              display: none;
            }
            .nav__branding img {
              background-color: #eee;
              border-radius: 8px;
              padding: 15px;
              width: 40px;
              height: 40px;
            }
            .nav__logo h1 {
              font-size: 20px;
            }
            .nav__logo h2 {
              font-size: 10px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
