import React from "react";
import { Fade } from "react-slideshow-image";
import "../styling/Title.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  require("../images/slide1.jpg"),
  require("../images/slide2.jpg"),
  require("../images/slide3.jpg"),
  require("../images/slide4.jpg"),
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "500px",
              backgroundImage: `url(${fadeImages[0]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="descr1">
              <h1>LARS WIVALLUS</h1>
              <h3>Speaking Luxury.</h3>
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "500px",
              backgroundImage: `url(${fadeImages[1]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="descr2">
              <h1>TIMEX</h1>
              <h3>All New Summer Collections</h3>
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "500px",
              backgroundImage: `url(${fadeImages[2]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="descr3">
              <h1>SAMSUNG</h1>
              <h3>Reimagine Time</h3>
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "500px",
              backgroundImage: `url(${fadeImages[3]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="descr4">
              <h1>Apple</h1>
              <h3>It's more than a wristwatch.</h3>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Slideshow;
