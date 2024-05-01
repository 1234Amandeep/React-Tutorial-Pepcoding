import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            {props.data.logo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {props.data.links.map((link, index) => (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
