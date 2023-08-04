import React from "react";
import Header from "./header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./footer/Footer";
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useSelector } from "react-redux";
import BookingForm from "./pages/booking/BookingForm";

const MainComponent = () => {
  const { token } = useSelector((state) => state.login);
  let root = null;
  if (token) {
    root = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory/:Type/:id" element={<Details />} />
        <Route path="/booking/:roomtype" element={<BookingForm />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    );
  } else {
    root = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory/:Type/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    );
  }
  return (
    <div>
      <Header />
      {root}
      <Footer />
    </div>
  );
};

export default MainComponent;
