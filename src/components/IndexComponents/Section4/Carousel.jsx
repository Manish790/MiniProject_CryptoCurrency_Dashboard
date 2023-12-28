import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  color: "#fff",
  textAlign: "center",
  background: "#FDFDFD",
};

const CarouselM = () => (
  <div className="CarouselFeeds" data-aos="fade-up">
    <p style={{ fontSize: "28px", marginLeft: "80px" }}>Client Testimonials</p>
    <Carousel autoplay>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            Our experience with the platform has been nothing short of
            exceptional. From the moment we engaged with the service, we were
            impressed by the seamless onboarding process and the user-friendly
            interface. The platform's intuitive design made it easy for our team
            to navigate and utilize its diverse features, ensuring a smooth
            transition into integrating it into our workflow.
          </p>
          <h6>- Anuradha Singh </h6>
        </div>
      </div>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            One of the standout aspects of the platform is its ability to
            significantly enhance productivity and collaboration within our
            team. The collaborative tools and real-time communication features
            have transformed the way we work together, fostering a more
            efficient and interconnected environment. With everything accessible
            in one centralized location, our team can effortlessly share files,
            ideas, and updates, leading to a notable increase in overall
            productivity.
          </p>
          <h6>- Vijay Mallya</h6>
        </div>
      </div>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            What truly sets this platform apart is the unparalleled level of
            support and reliability it provides. The customer service team has
            been responsive, attentive, and proactive in addressing any
            inquiries or concerns promptly. Additionally, the platform's
            stability and consistent performance have instilled confidence in
            our team, allowing us to focus on our work without disruptions. As a
            client, we wholeheartedly endorse this platform for its outstanding
            features, ease of use, and the exceptional support it offers.
          </p>
          <h6>- Aman Kumar</h6>
        </div>
      </div>
    </Carousel>
  </div>
);

export default CarouselM;
