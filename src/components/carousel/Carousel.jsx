import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "100vh",
  width: "100%",
  textAlign: "center",
};
const BannerCarousel = () => (
  <Carousel autoplay>
    <div>
      <div>
        <img src="carousel/c1.jpg" alt="" style={contentStyle} />
      </div>
    </div>
    <div>
      <img src="carousel/c2.jpg" alt="" style={contentStyle} />
    </div>
  </Carousel>
);
export default BannerCarousel;
