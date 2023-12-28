import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterParent">
      <div className="Footer1" data-aos="fade">
        <div>
          <img
            style={{ width: "280px" }}
            src="Images/FooterImages/pngwing.com.png"
            alt="acee"
            data-aos="fade"
          />
          
        </div>
        <div>
          <p className="footerpara">
            © 2023 <span className="footergoldenpara">Mini_Project-1</span>{" "}
            <br /> Designed and Developed by <br />
            <span className="footergoldenpara">Squadzz-404</span>
          </p>
        </div>
      </div>
      <div className="Footer2">
        <p className="footeremail">Cryptofy25@gmail.com</p>
        <p>Contact Us: +91 790671XXXX</p>
      </div>
    </div>
  );
};

export default Footer;
