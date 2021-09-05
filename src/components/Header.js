import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section once="header" id="header">
        <nav className="navbar navbar-dark navbar-expand-lg navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header d-flex align-items-center">
              <div>
                <i
                  className="bi bi-house-fill fa-2x"
                  style={{ fontSize: "1.6rem" }}
                />
              </div>
              <div className="ms-2 mt-1">
                <a
                  className="navbar-brand text-white fw-bold disp-7"
                  href="index.html"
                >
                  Tiny House Rentals
                </a>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link text-white disp-4"
                    href="rentalinfo.html"
                  >
                    Rentals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white disp-4" href="aboutus.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white disp-4" href="login.html">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}
