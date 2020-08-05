import React from "react";
import { Fade } from "react-slideshow-image";
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
          <div className="image-container">
            <img src={fadeImages[0]} className="img-slide" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} className="img-slide" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} className="img-slide" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} className="img-slide" />
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Slideshow;
