import React from "react";

function Navbar({ pages }) {
  return (
    <>
      <nav className="nav">
        <div className="nav__branding">JNTUK UCEV IT</div>
        <div className="nav__links">
          {pages.map((page) => {
            return (
              <a
                className={`nav__link ${page.isActive && "nav__link--active"}`}
                href={page.url}
              >
                {page.name}
              </a>
            );
          })}
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #222;
            padding: 20px;
            color: #eee;
          }
          .nav__branding {
            font-weight: 900;
          }
          .nav__links {
            display: flex;
            gap: 10px;
          }
          .nav__link {
            display: block;
            border: 2px solid transparent;
            transition: all 0.3s ease-in-out;
            padding: 5px;
          }
          .nav__link:hover,
          .nav__link--active {
            border-bottom: 2px solid #eee;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
