import { useSelector } from "react-redux";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import { Button } from "antd";
import "./roomdetails.scss";
import { useNavigate } from "react-router-dom";

const RoomDetails = ({ data, loading }) => {
  const { token } = useSelector((state) => state.login);
  const navigate = useNavigate();
  return (
    <div className="roomdetailswrapper">
      <ContentWrapper>
        {!loading ? (
          <div className="roomdetails">
            <div className="roomimage">
              <img src={`/${data?.images}`} />
            </div>
            <div className="description">
              <h1>{data?.name}</h1>
              <p>{data?.description}</p>
              <h3>PRICE : BDT {data?.price} per room/night</h3>
              <h5>Total Rooms : {data?.totalroom}</h5>
              <h5>Available Rooms : {data?.availableroom}</h5>
              {data?.availableroom == 0 ? (
                <p className="notavilable">Not Avilable !</p>
              ) : (
                <Button
                  disabled={token ? false : true}
                  className={token ? "btn" : "disable"}
                  title={!token ? "Please Login" : ""}
                  onClick={() =>
                    token &&
                    navigate(`/booking/${data?.name.split(" ").join("")}`)
                  }
                >
                  BOOK NOW
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="roomdetails">
            <div
              className="roomimage skeleton"
              style={{ width: "50%", height: "400px" ,marginBottom:'15px'}}
            ></div>
            <div className="description">
              <h1
                className="skeleton"
                style={{ padding: "10px", borderRadius: "10px" }}
              ></h1>
              <p
                className="skeleton"
                style={{
                  padding: "20px 0",
                  margin: "10px 0",
                  borderRadius: "10px",
                }}
              ></p>
              <h3
                className="skeleton"
                style={{ padding: "8px", borderRadius: "10px" }}
              ></h3>
              <h5
                className="skeleton"
                style={{
                  padding: "7px",
                  margin: "10px 0",
                  borderRadius: "10px",
                }}
              ></h5>
              <h5
                className="skeleton"
                style={{ padding: "8px", borderRadius: "10px" }}
              ></h5>
            </div>
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default RoomDetails;
