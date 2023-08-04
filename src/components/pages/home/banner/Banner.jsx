import BannerCarousel from "../../../carousel/Carousel";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <BannerCarousel />
      <div className="bannerHeading">
        <h1>
          WellCome To <br />
          Hotel SeaGull .
        </h1>
        <span>A luxurious Hotel In Bangladesh .</span>
      </div>
    </div>
  );
};

export default Banner;
