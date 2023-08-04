import About from "./about/About";
import Banner from "./banner/Banner";
import Feature from "./features/Feature";
import Gallery from "./gallery/Gallery";
import Offer from "./offer/Offer";
import Rooms from "./rooms/Rooms";

const Home = () => {
  return (
    <>
      <Banner />
      <Rooms />
      <About />
      <Feature />
      <Offer />
      <Gallery />
    </>
  );
};

export default Home;
