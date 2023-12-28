import React from "react";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="SecTwoParent">
      <div className="SecTwoLeft" data-aos="fade-right">
        <div className="HexaGonalImage">
          <img
            style={{ width: "100%" }}
            src="Images/mandown.png"
            alt="hexagonalimage"
          />
        </div>
      </div>
      <div className="SecTwoRight" data-aos="fade-left">
        <h1 className="RRResult"></h1>
        <div>
          <p>
            <img
              className="hammersec3"
              src="Images/IndexPageImages/Section3/hammer.png"
              alt="xc"
            />
            Most Reputed Platform & Attorneys for you
          </p>
          <div className="sec3para">
            One of the most well-regarded cryptocurrency platforms is Cryptofy.
            Cryptofy offers a user-friendly interface, a high level of security,
            and a wide range of supported cryptocurrencies, making it an
            excellent choice for both beginners and experienced traders.
          </div>
          <br />
          <br />
          <p>
            <img
              className="hammersec3"
              src="Images/IndexPageImages/Section3/hammer.png"
              alt="xc"
            />
            We will for your Time and Expectations
          </p>

          <div className="sec3para">
            Utilizing the right platform can be a game-changer when it comes to
            saving time and streamlining various tasks. Whether you're running a
            business, managing personal finances, or seeking information, the
            advantages of time-saving platforms are evident.
          </div>
          <br />
          <br />
          <p>
            <img
              className="hammersec3"
              src="Images/IndexPageImages/Section3/hammer.png"
              alt="xc"
            />
            From Middle-Class to High-Class
          </p>
          <div className="sec3para">
            Time-saving platforms are not limited to any specific economic class
            and can benefit individuals across the socioeconomic spectrum, from
            middle-class to high-class. These platforms offer a range of
            solutions that can enhance efficiency and convenience in various
            aspects of life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
