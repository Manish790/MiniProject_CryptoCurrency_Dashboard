import React from "react";
import "./Section1.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Section1 = () => {
  let navigate = useNavigate();
  let redirectCoins = () => {
    navigate("/exchanges");
  };
 

  return (
    <div className="SecOneParent">
      <div className="SecOneLeft" data-aos="fade-up">
        <div className="content">
          <div className="vector">
            <img
              // style={{ width: "1500px" }}
              src="Images/vector.png"
              alt="acee"
              data-aos="fade"
            />
            {/* <h1>
              "It's money 2.0, <br /> a huge huge deal."
            </h1> */}
          </div>
        </div>
        <br />
        <br />

        <div className="SecOneLeftButtons" data-aos="fade-up">
          <button onClick={redirectCoins} className="SecOneBookAppoBtn">
            Available Coins
          </button>
          <button className="SecOneMeetLawBtn">
            <Link to="/coins">Analyze</Link>
          </button>
        </div>
        {/* <hr style={{ width: "74%" }} /> <br /> */}
        <div>
          <p style={{ color: "grey" }}></p>
        </div>
        <br />
        <br />
      </div>
      <div className="SecOneRight" data-aos="fade-up">
        <img
          className="coin-img"
          style={{ width: "100%" }}
          src="Images/IndexPageImages/coinpng.png"
          alt="Brownben"
        />
      </div>
    </div>
  );
};

export default Section1;
