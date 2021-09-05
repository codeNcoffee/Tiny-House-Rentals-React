import React, { Component } from "react";

export default class ContactModal extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-info"
          id="fixedbtn"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          Contact
        </button>
        <div
          className="modal fade"
          id="contactModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="contactModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="contactModalLabel">
                  Contact Us
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="ms-1">
                    <div className="mb-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your e-mail"
                      />
                    </div>
                    <button type="submit" className="form-control btn btn-info">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
