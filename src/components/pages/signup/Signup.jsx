import React from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../contentwrapper/ContentWrapper";
import { Formik } from "formik";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./signup.scss";
import { userSignup } from "../../../store/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../spinner/Spinner";

const Signup = () => {
  const { message, loading, errmessage } = useSelector((state) => state.signup);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUp = (values) => {
    dispatch(userSignup(values));
  };
  if (message) {
    navigate("/login");
  }
  return (
    <div className="loginwrapper">
      <ContentWrapper>
        {!loading ? (
          <div className="signupform">
            <Formik
              initialValues={{ email: "", password: "", confirmpassword: "" }}
              onSubmit={(values) => {
                signUp(values);
              }}
              validate={(values) => {
                const emailRegex = new RegExp(
                  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                  "gm"
                );
                const errors = {};
                if (!values.email) {
                  errors.email = "required";
                } else if (!emailRegex.test(values.email)) {
                  errors.email = "Invalid email !";
                }
                if (!values.password) {
                  errors.password = "required !";
                } else if (values.password.length < 8) {
                  errors.password = "Password mustbe me 8 character !";
                }
                if (!values.confirmpassword) {
                  errors.confirmpassword = "required";
                }
                if (values.password != values.confirmpassword) {
                  errors.confirmpassword = "Password doesnot match !";
                }
                return errors;
              }}
            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <form action="" onSubmit={handleSubmit}>
                  <h1>Signup</h1>
                  <h3 style={{color:'red'}}>{errmessage && errmessage}</h3>
                  <div className="email">
                    <span>
                      <MdEmail />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                  <span style={{ color: "red", textAlign: "left" }}>
                    {errors.email}
                  </span>
                  <div className="password">
                    <span>
                      <FaLock />
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <span style={{ color: "red", textAlign: "left" }}>
                    {errors.password}
                  </span>
                  <div className="password">
                    <span>
                      <FaLock />
                    </span>
                    <input
                      type="password"
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                    />
                  </div>
                  <span style={{ color: "red", textAlign: "left" }}>
                    {errors.confirmpassword}
                  </span>

                  <input type="submit" value="SignUp" className="inputbtn" />
                  <p>Forgot Password?</p>
                </form>
              )}
            </Formik>
            <hr />
            <p className="signup">
              Allready have an account?{" "}
              <span onClick={() => navigate("/login")}>login</span>
            </p>
          </div>
        ) : (
          <div className="signupform" style={{ background: "transparent" }}>
            <Spinner />
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Signup;
