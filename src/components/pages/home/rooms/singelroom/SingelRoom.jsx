import React from "react";
import "./singelroom.scss";
import { useNavigate } from "react-router-dom";

const SingelRoom = ({ room, catagories }) => {
  const navigate = useNavigate();
  return (
    <div
      className="singelroom"
      onClick={() =>
        navigate(
          `/catagory/${room?.name.split(" ").join("").toLowerCase()}/${room.id}`
        )
      }
    >
      <img src={room?.images} alt="" width={"100%"} />
      <div className="roomsdetails">
        <h5>{room?.name}</h5>
        <span>BTD {room?.price} per night</span>
      </div>
    </div>
  );
};

export default SingelRoom;
