import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <section once="search" id="main">
        <div className="container-fluid main">
          <div className="row h-100 w-100">
            <div className="col col-md-10 col-lg-6 col-xl-6 m-auto">
              <form name="search" role="form">
                <div className="ms-5">
                  <label className="form-label" htmlFor="tinyhousesearch">
                    <h1 className="mb-3 disp-2 text-nowrap text-responsive">
                      <strong>Search for a tiny house</strong>
                    </h1>
                  </label>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-lg overflow-auto"
                        id="tinyhousesearch"
                        name="tinyhousesearch"
                        placeholder="enter city or state"
                      />
                    </div>
                    <div className="col-lg-2 text-center mt-2 mt-lg-0">
                      <button
                        type="button"
                        className="btn btn-lg btn-search"
                        name="search"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
