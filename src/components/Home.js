import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <section once="content" id="content">
        <div className="container content">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="pb-3 pl-2">
                <h4>All available listings for tiny houses!</h4>
              </div>
            </div>
            <div className="col">
              <div className="row justify-content-between">
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-01.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-02.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-03.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-04.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-05.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-06.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-07.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-08.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-09.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-10.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-11.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-12.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-13.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-14.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-15.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
                <div className="col-md-3 pb-2">
                  <a href="rentalinfo.html">
                    <img
                      src="images/tinyhouses/tiny-house-16.jpg"
                      alt=""
                      className="img-fluid d-flex mx-auto rounded"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container maplisting">
          <div className="row my-5 p-3">
            <div className="col d-flex align-items-center">
              <div className="mx-auto">
                <h5 className="mb-2">The world locations of all listings</h5>
                <img
                  src="images/map.png"
                  alt="Map of rental listings"
                  className="img-fluid d-flex mx-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
