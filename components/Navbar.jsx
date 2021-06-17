import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar({ homepage, active }) {
  const [toggleHamBurger, setToggleHamBurger] = useState(false);
  const hamMenu = useRef(null);
  let pages = [
    { name: "Home", isActive: active == "home", url: "/" },
    { name: "About", isActive: active == "about", url: "about" },
    { name: "Faculty", isActive: active == "faculty", url: "faculty" },
    { name: "Placements", isActive: active == "placements", url: "placements" },
    { name: "MOUs", isActive: active == "mous", url: "mous" },
  ];
  useEffect(() => {
    if (toggleHamBurger) {
      hamMenu.current.classList.toggle("open");
    }
  }, [toggleHamBurger]);

  return (
    <>
      <nav className={homepage ? "nav__homepage" : "nav"}>
        <div className="nav__branding">
          <Image src="/images/jntuk_logo.png" width="60" height="60" />
          <div className={homepage ? "nav__logoHome" : "nav__logo"}>
            <h1>JNTUK UCEV</h1>
            <h2>Information Technology</h2>
          </div>
        </div>
        <div
          className="navbar__hamburger"
          id="hamburger-icon"
          onClick={() => {
            setToggleHamBurger(!toggleHamBurger);
          }}
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
              <Link key={page.name} href={page.url}>
                <a
                  className={`nav__link ${
                    page.isActive && "nav__link--active"
                  }`}
                >
                  {page.name}
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
      <style jsx global>
        {`
          .nav__homepage {
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
          .nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: transparent;
            padding: 15px 10px;
            color: #eee;
            background-color: #23153c;
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
          .nav__logo,
          .nav__logoHome {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
          }
          .nav__logoHome h1,
          .nav__logoHome h2,
          .nav__logo h1,
          .nav__logo h2 {
            margin: 0;
            padding: 0;
          }
          .nav__logoHome h1 {
            font-size: 24px;
            font-weight: 900;
            color: #fff;
          }
          .nav__logoHome h2 {
            font-size: 14px;
            font-weight: 400;
          }
          .nav__logo h1 {
            font-size: 21px;
            font-weight: 900;
            color: #fff;
          }
          .nav__logo h2 {
            font-size: 13px;
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
          .nav__link--active:hover {
            border-bottom: 0;
            background-color: #9e2751;
          }

          @media screen and (max-width: 700px) {
            nav,
            .nav__homepage {
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
              display: ${toggleHamBurger ? "block" : "none"};
              position: absolute;
              flex-direction: column;
              background-color: #fff;
              color: #23153c;
              top: 100px;
              padding: 20px;
              border-radius: 12px;
              width: 100vw;
              box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
                0 0px 5.3px rgba(0, 0, 0, 0.028),
                0 0px 10px rgba(0, 0, 0, 0.035),
                0 0px 17.9px rgba(0, 0, 0, 0.042),
                0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);
            }
            .nav__branding img {
              background-color: #eee;
              border-radius: 8px;
              padding: 15px;
              width: 40px;
              height: 40px;
            }
            .nav__homepage .nav__branding img {
              width: 50px;
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
