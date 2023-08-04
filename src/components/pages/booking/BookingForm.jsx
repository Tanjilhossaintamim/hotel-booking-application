import { Formik } from "formik";
import "./booking.scss";
import ContentWrapper from "../../contentwrapper/ContentWrapper";
import { CgProfile } from "react-icons/cg";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import Spinner from "../../spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "antd";

const BookingForm = () => {
  const { token } = useSelector((state) => state.login);
  const [status, setStatus] = useState(null);
  const { roomtype } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitBookingForm = (data) => {
    data.room = roomtype;
    setStatus("loading");

    axios
      .post(
        "https://hotel-booking-4974c-default-rtdb.firebaseio.com/bookinglist.json?auth=" +
          token,
        data
      )
      .then((res) => {
        setStatus(null);
        setModalOpen(true);
        setMessage("Room Booked Successfully !");
      })
      .catch((error) => {
        setMessage(error.message);
        setModalOpen(true);
      });
  };
  return (
    <div className="bookingwrapper">
      <div style={{ height: "200px" }}></div>
      <ContentWrapper>
        <Modal
          open={modalOpen}
          centered
          onOk={() => navigate("/")}
          onCancel={() => navigate("/")}
        >
          <h4>{message}</h4>
        </Modal>

        <div className="bookingform">
          {status ? (
            <Spinner />
          ) : (
            <Formik
              initialValues={{
                name: "",
                phone: "",
                address: "",
                nid: "",
                checkin: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required!";
                }
                if (!values.phone) {
                  errors.phone = "Required!";
                } else if (!/^(?:\+88|88)?(01[3-9]\d{8})$/.test(values.phone)) {
                  errors.phone = "Phone Number Not Vallid !";
                }
                if (!values.address) {
                  errors.address = "Required!";
                }
                if (!values.nid) {
                  errors.nid = "Required!";
                } else if (!/^\d+$/.test(values.nid)) {
                  errors.nid = "Nid Not Valid !";
                }
                if (!values.checkin) {
                  errors.checkin = "Required!";
                }
                return errors;
              }}
              onSubmit={(values) => {
                submitBookingForm(values);
              }}
            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <form action="" onSubmit={handleSubmit}>
                  <h1>Booking Form</h1>
                  <div className="input">
                    <span>
                      <CgProfile />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <span style={{ color: "red" }}>{errors.name}</span>
                  <div className="input">
                    <span>
                      <BsTelephoneOutboundFill />
                    </span>
                    <input
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <span style={{ color: "red" }}>{errors.phone}</span>

                  <div className="input">
                    <span>
                      <MdLocationOn />
                    </span>
                    <input
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      placeholder="Your Address"
                    />
                  </div>
                  <span style={{ color: "red" }}>{errors.address}</span>

                  <div className="input">
                    <span>
                      <MdContactPage />
                    </span>
                    <input
                      type="text"
                      name="nid"
                      placeholder="Your Nid Number"
                      value={values.nid}
                      onChange={handleChange}
                    />
                  </div>
                  <span style={{ color: "red" }}>{errors.nid}</span>

                  <div className="input">
                    <span>
                      <BsFillCalendarDateFill />
                    </span>
                    <input
                      type="text"
                      name="checkin"
                      value={values.checkin}
                      onChange={handleChange}
                      placeholder="Checkin Date 12/10/23"
                    />
                  </div>
                  <span style={{ color: "red" }}>{errors.checkin}</span>

                  <input type="submit" value="Proceed" className="proceedbtn" />
                </form>
              )}
            </Formik>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BookingForm;
