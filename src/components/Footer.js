import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer disp-7">
        <div className="footerheader">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-3 col-lg-4 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0 text-white">
                  Connect with us on social media!
                </h6>
              </div>
              <div className="col-md-8 col-lg-6 text-center ms-auto">
                <i className="bi bi-facebook text-white me-4" />
                <i className="bi bi-twitter text-white me-4" />
                <i className="bi bi-instagram text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold">Tiny House Rentals</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "50px" }}
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                fuga voluptatem magni repellendus sint possimus.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold">Discover</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "50px" }}
              />
              <p>
                <a href="#">Rentals</a>
              </p>
              <p>
                <a href="#">Blog</a>
              </p>
              <p>
                <a href="#">Subscribe</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold">Company</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "50px" }}
              />
              <p>
                <a href="#">About</a>
              </p>
              <p>
                <a href="#">FAQ</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "50px" }}
              />
              <p>
                <i className="bi bi-house me-2" />
                Atlanta, GA
              </p>
              <p>
                <i className="bi bi-envelope me-2" />
                info@example.com
              </p>
              <p>
                <i className="bi bi-phone me-2" />
                +1 1-800-0000
              </p>
              <p>
                <i className="bi bi-printer me-2" />
                +1 1-800-0000
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          ©<span className="ms-1 me-2" id="copyYear">Copyright</span>
          <a href="index.html">Tiny House Rentals</a>
        </div>
      </footer>
    );
  }
}
