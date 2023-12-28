import React from "react";
import Section1 from "../IndexComponents/Section1/Section1";
import Section2 from "../IndexComponents/Section2/Section2";
import Section3 from "../IndexComponents/Section3/Section3";
import Section4 from "../IndexComponents/Section4/Section4";
import Footer from "../IndexComponents/Footer/Footer";
import "./index.css";
const IndexPage = () => {
  return (
    <div className="FirstView">
      <div className="SecOnebackgroundGreyBox"></div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      
    </div>
  );
};

export default IndexPage;
