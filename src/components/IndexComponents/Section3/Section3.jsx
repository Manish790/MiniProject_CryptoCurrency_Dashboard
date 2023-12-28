import React from "react";
import "./Section3.css";
import SupportCard from "./SupportCard";
const Section3 = () => {
  return (
    <div>
      <div className="YellowBudsParent">
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf3.png"
          text="Analyze"
          description="Analyze the Trend seemlessly.."
          delay={50}
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf1.png"
          text="Filter Coins"
          description="Filter Your Search..."
          delay={100}
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf2.png"
          text="Contribution"
          description="Connecting with people for Contribution"
          delay={150}
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf4.png"
          text="Accuracy"
          description="Real-Time Updates.."
          delay={250}
        />
      </div>
    </div>
  );
};

export default Section3;
