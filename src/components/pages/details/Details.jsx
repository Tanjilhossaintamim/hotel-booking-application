import { useParams } from "react-router-dom";
import RoomDetails from "./roomDetails/RoomDetails";
import useFetch from "../../../hooks/useFetch";
import RoomBanner from "./banner/RoomBanner";

const Details = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`/rooms/${id}`);

  return (
    <div>
      <RoomBanner />
      <RoomDetails data={data} loading={loading} />
    </div>
  );
};

export default Details;
