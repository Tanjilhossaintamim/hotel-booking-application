import SingelFeature from "./singelfeature/SingelFeature";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import "./feature.scss";
import exit from "/features/exit-logout-2856.svg";
import drayer from "/features/dryer-1593.svg";
import car from "/features/parking-1641.svg";
import wine from "/features/champagne-bottle-2977.svg";
import pool from "/features/swimming-pool-2711.svg";
import airport from "/features/plane-3995.svg";
import drink from "/features/martini-1787.svg";
import support from "/features/chat-support-1681.svg";

const Feature = () => {
  return (
    <div className="featurewrapper">
      <ContentWrapper>
        <div className="heading">
          <h1>Hotel Features</h1>
          <div className="border"></div>
        </div>
        <div className="features">
          <SingelFeature src={pool} title={"Swimming Pool"} />
          <SingelFeature src={support} title={"Hotel Teller"} />
          <SingelFeature src={exit} title={"Fire Exit"} />
          <SingelFeature src={car} title={"Car Parking"} />
          <SingelFeature src={drayer} title={"Hair Dryer"} />
          <SingelFeature src={drink} title={"Drinks"} />
          <SingelFeature src={wine} title={"Mini Bar"} />
          <SingelFeature src={airport} title={"Car Airport"} />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Feature;
