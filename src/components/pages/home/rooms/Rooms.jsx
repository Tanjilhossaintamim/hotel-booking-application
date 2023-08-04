import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import { useSelector } from "react-redux";
import "./rooms.scss";
import SingelRoom from "./singelroom/SingelRoom";

const Rooms = () => {
  const { rooms, catagories, loading } = useSelector((state) => state.home);
  const room = rooms?.map((room) => {
    return <SingelRoom room={room} key={room.id} catagories={catagories} />;
  });

  return (
    <div className="roomswrapper">
      <ContentWrapper>
        <div className="heading">
          <h1>Our Rooms</h1>
          <div className="border"></div>
        </div>

        <div className="rooms">{room}</div>
      </ContentWrapper>
    </div>
  );
};

export default Rooms;
