import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log();
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>
            <h2 style={{ color: "teal" }}>404 error</h2>
            <h2>Page not found</h2>
            <h2>
              The requested page URL{" "}
              <span style={{ color: "red" }}>
                {" "}
                {this.props.location.pathname}{" "}
              </span>
              was not found
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
