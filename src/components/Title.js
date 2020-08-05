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
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "600px",
              backgroundImage: `url(${fadeImages[0]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            hajj ,
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "600px",
              backgroundImage: `url(${fadeImages[1]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            hwehkwerhk
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "600px",
              backgroundImage: `url(${fadeImages[2]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            bkjbbkj
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              width: "1400px",
              height: "600px",
              backgroundImage: `url(${fadeImages[3]})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            hkhkj
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Slideshow;
